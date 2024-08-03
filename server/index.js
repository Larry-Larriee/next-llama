const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const puppeteer = require("puppeteer");
const bodyParser = require("body-parser");
const resemble = require("resemblejs");
const timeout = require("connect-timeout");

const backspaceAll = require("./helper/backspaceAll");
const removeImage = require("./helper/removeImage");
const randomChar = require("./helper/randomChar");

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

// leaderboardTimeSort route returns an array of object
// leaderboardLevelSort route allows the client to sort the leaderboard by level
app.get("/leaderboardLevelSort", (req, res) => {
  let valueSwapped;

  tailwindCollection
    .find({})
    .toArray()
    .then((result) => {
      // use a do-while loop to make at least one iteration
      do {
        valueSwapped = false;

        for (let i = 0; i < result.length - 1; i++) {
          // if the current tailwind level is greater than the next tailwind level, swap the two values
          if (result[i].tailwindLevel > result[i + 1].tailwindLevel) {
            // destructuring to change the existing values of the array indexes
            [result[i].tailwindLevel, result[i + 1].tailwindLevel] = [
              result[i + 1].tailwindLevel,
              result[i].tailwindLevel,
            ];

            // in the context of the actual sorting, the valueSwapped is not going to constantly change to true or false
            // it's a check to make sure the bubble sort keeps iterating until it doesn't need to anymore
            valueSwapped = true;
          }
        }
      } while (valueSwapped);

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

// tailwindAccuracy route takes the user's tailwindCode and compares how the result looks to the solution result
// tailwindData.level (http) the page of the level that the user is on
// tailwindData.userSolution (string) the code that the user wrote
app.post("/tailwindAccuracy", async (req, res) => {
  const { level, userSolution } = req.body;

  let randomCharacters = await randomChar();

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

      if (level === null) {
        await page.goto(
          "https://tailwind-llama.vercel.app/levels/final-challenge"
        );
      } else {
        await page.goto(
          "https://tailwind-llama.vercel.app/levels/level-" + level.toString()
        );
      }

      const textEditor = await page.waitForSelector(".textEditor");
      const userSolutionUI = await page.waitForSelector(".userSolutionUI");
      const levelSolutionButton = await page.waitForSelector(
        ".levelSolutionButton"
      );

      console.log("puppeteer is on the page");

      await backspaceAll(page, textEditor);
      await page.type(".textEditor", userSolution);

      await userSolutionUI.screenshot({
        path: `results/user${randomCharacters}.png`,
      });

      await levelSolutionButton.click();
      const levelSolutionUI = await page.waitForSelector(".levelSolutionUI");

      await levelSolutionUI.screenshot({
        path: `results/solution${randomCharacters}.png`,
      });

      console.log("puppeteer has finished screenshotting");

      let accuracy = 0;

      // Wait for the comparison to finish (assuming a promise-based wrapper for resemble)
      await new Promise((resolve) => {
        const diff = resemble(`results/user${randomCharacters}.png`)
          .compareTo(`results/solution${randomCharacters}.png`)
          .ignoreColors()
          .onComplete((data) => {
            accuracy = 100 - data.misMatchPercentage;

            // remove the user and solution image after usage
            removeImage(`results/user${randomCharacters}.png`);
            removeImage(`results/solution${randomCharacters}.png`);
            resolve();
          });
      });

      console.log("resemble has finished comparing", accuracy);

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
});
