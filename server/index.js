const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const puppeteer = require("puppeteer");
const bodyParser = require("body-parser");
const resemble = require("resemblejs");
const fs = require("fs");
const timeout = require("connect-timeout");

const backspaceAll = require("./helper/backspaceAll");

// config() loads environment variables in process.env object (object built into node.js)
require("dotenv").config();

// Create a MongoClient to access the database
const client = new MongoClient(
  "mongodb+srv://larryle704:KRchUpF69HGJZ71F@tailwind-cluster.vxowyt0.mongodb.net/?retryWrites=true&w=majority&appName=tailwind-cluster",
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

// Connects to the database without closing the connection (doing so would be redundant for everyone making HTTP requests to server)
async function connectToDB() {
  try {
    // Connect the client to the server and send a ping
    await client.connect();
    // admin is a built-in database
    await client.db("admin").command({ ping: 1 });

    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.error("error: " + error);
  }
}
connectToDB();

// node.js runs top to bottom. Once the sever connects to mongoDB, locate the tailwind collection
const tailwindCollection = client
  .db("tailwind-practice")
  .collection("leaderboard");

const app = express();
// allow client to make requests to server (allowing all origins at the moment)
app.use(cors({}));

// Parse JSON bodies (content-type: application/json) required for POST requests
app.use(bodyParser.json());

// timeout middleware to prevent the server from hanging if the client takes too long to respond
app.use(timeout("100s"));

// leaderboard route returns an array of objects
// each object contains the object ID, username, date, tailwind level, tailwind data, and time of level completion (seconds)
app.get("/leaderboard", (req, res) => {
  tailwindCollection
    .find({})
    .toArray()
    .then((result) => {
      res.send(result);
    });
});

// editLeaderboard route allows the client to edit the leaderboard by adding their information
// the client can add their username, date, tailwind level, tailwind data, and time of level completion (seconds)
app.post("/editLeaderboard", (req, res) => {
  const { username, date, tailwindLevel, tailwindData, time } = req.body;

  tailwindCollection
    .insertOne({
      username,
      date,
      tailwindLevel,
      tailwindData,
      time,
    })
    .then(() => {
      res.send("Successfully added to the leaderboard!");
    })
    .catch((error) => {
      res.send("Error: " + error);
    });
});

// MongoDB doesn't literally store images but the collection stores the index of images that are taken
let imageCollection = client.db("tailwind-practice").collection("images");

// tailwindAccuracy route takes the user's tailwindCode and compares how the result looks to the solution result
// tailwindData.level (http) the page of the level that the user is on
// tailwindData.userSolution (string) the code that the user wrote
app.post("/tailwindAccuracy", async (req, res) => {
  const { level, userSolution } = req.body;

  let [imageCount] = await imageCollection.find({}).toArray();
  imageCount = imageCount.imageCount;

  puppeteer
    .launch({
      args: [
        "--disable-web-security",
        "--disable-features=IsolateOrigins",
        "--disable-site-isolation-trials",
      ],
    })
    .then(async (browser) => {
      let page = await browser.newPage();
      await page.setBypassCSP(true);
      await page.goto(
        "https://next-llama.vercel.app/levels/level" + level.toString()
      );

      const textEditor = await page.waitForSelector(".textEditor");
      const userSolutionUI = await page.waitForSelector(".userSolutionUI");
      const levelSolutionButton = await page.waitForSelector(
        ".levelSolutionButton"
      );

      console.log("puppeteer is on the page");

      await backspaceAll(page, textEditor);
      await page.type(".textEditor", userSolution);

      await userSolutionUI.screenshot({
        path: `results/user${imageCount}.png`,
      });

      await levelSolutionButton.click();
      const levelSolutionUI = await page.waitForSelector(".levelSolutionUI");

      await levelSolutionUI.screenshot({
        path: `results/solution${imageCount}.png`,
      });

      console.log("puppeteer has finished screenshotting");

      let accuracy = 0;

      // console logging diff gives functions for diff. the data argument in onComplete gives the accuracy percentage
      const diff = resemble(`results/user${imageCount}.png`)
        .compareTo(`results/solution${imageCount}.png`)
        .ignoreColors()
        .onComplete((data) => {
          accuracy = 100 - data.misMatchPercentage;
        });

      console.log("resemble has finished comparing");

      // we convert the id string to an object id using the ObjectId class and match the id to the imageCount key and value, then updating it
      imageCollection.updateOne(
        {
          _id: new ObjectId("66a00a8b057213c70081707c"),
        },
        { $inc: { imageCount: 1 } }
      );

      await browser.close();

      // make sure to return JSON and not strings because the front-end is handling JSON
      res.send({ accuracy });
    });
});

// this test is going to take the content from the POST request body and send it back to the client
app.post("/test", async (req, res) => {
  const { content } = req.body;

  res.send({ content });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, async () => {
  console.log("Server listening on port 5000");

  let [imageCount] = await imageCollection.find({}).toArray();
  imageCount = imageCount.imageCount;

  // we know that the imageCount value is one ahead of the actual image count
  // we also know that two images are taken: the user and the solution
  for (let i = 0; i < imageCount; i += 1) {
    fs.unlink(`results/user${i}.png`, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    fs.unlink(`results/solution${i}.png`, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }

  // when the server reopens, purge all images and reset imageCount to 0 (saving space)
  // keep in mind that because the imageCount value is updated AFTER the image is taken, the value stored in mongoDB will always be one ahead of the actual image count
  imageCollection.updateOne(
    { _id: new ObjectId("66a00a8b057213c70081707c") },
    { $set: { imageCount: 0 } }
  );
});
