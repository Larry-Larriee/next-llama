const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const puppeteer = require("puppeteer");
const bodyParser = require("body-parser");
const resemble = require("resemblejs");
const fs = require("fs");

const backspaceAll = require("./helper/backspaceAll");

// config() loads environment variables in process.env object (object built into node.js)
require("dotenv").config();

// Create a MongoClient to access the database
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

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
  .db(process.env.MONGODB_DATABASE)
  .collection(process.env.MONGODB_COLLECTION_LEADERBOARD);

const app = express();
// allow client to make requests to server (allowing all origins at the moment)
app.use(cors({}));

// Parse JSON bodies (content-type: application/json) required for POST requests
app.use(bodyParser.json());

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
let imageCollection = client
  .db(process.env.MONGODB_DATABASE)
  .collection(process.env.MONGODB_COLLECTION_IMAGES);

// tailwindAccuracy route takes the user's tailwindCode and compares how the result looks to the solution result
// tailwindData.level (http) the page of the level that the user is on
// tailwindData.userSolution (string) the code that the user wrote
app.post("/tailwindAccuracy", async (req, res) => {
  const { level, userSolution } = req.body;

  let [imageCount] = await imageCollection.find({}).toArray();
  imageCount = imageCount.imageCount;

  puppeteer.launch().then(async (browser) => {
    let page = await browser.newPage();
    await page.goto(
      "https://next-llama.vercel.app/levels/level" + level.toString()
    );

    const textEditor = await page.waitForSelector(".textEditor");
    const userSolutionUI = await page.waitForSelector(".userSolutionUI");
    const levelSolutionButton = await page.waitForSelector(
      ".levelSolutionButton"
    );

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

    let accuracy = 0;

    // console logging diff gives functions for diff. the data argument in onComplete gives the accuracy percentage
    const diff = resemble(`results/user${imageCount}.png`)
      .compareTo(`results/solution${imageCount}.png`)
      .ignoreColors()
      .onComplete((data) => {
        accuracy = 100 - data.misMatchPercentage;
      });

    // we convert the id string to an object id using the ObjectId class and match the id to the imageCount key and value, then updating it
    imageCollection.updateOne(
      {
        _id: new ObjectId(process.env.MONGODB_COLLECTION_IMAGES_OBJECTID),
      },
      { $inc: { imageCount: 1 } }
    );

    await browser.close();
    res.send({ accuracy });
  });
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
    { _id: new ObjectId(process.env.MONGODB_COLLECTION_IMAGES_OBJECTID) },
    { $set: { imageCount: 0 } }
  );
});
