const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const puppeteer = require("puppeteer");
const bodyParser = require("body-parser");
const resemble = require("resemblejs");
const timeout = require("connect-timeout");
const cookieParser = require("cookie-parser");

const backspaceAll = require("./helper/backspaceAll");
const removeImage = require("./helper/removeImage");
const randomChar = require("./helper/randomChar");
const userNameCheck = require("./helper/userNameCheck");

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
const leaderboardCollection = client
  .db(process.env.MONGODB_DATABASE)
  .collection(process.env.MONGODB_COLLECTION_LEADERBOARD);

const accountsCollection = client
  .db(process.env.MONGODB_DATABASE)
  .collection(process.env.MONGODB_COLLECTION_ACCOUNTS);

const app = express();
// allow client to make requests to server (allowing localhost at the moment)
// credentials set to true so front-end can send cookies to the server (for authentication purposes)
app.use(cors({ origin: "http://127.0.0.1:3000", credentials: true }));

// Parse JSON bodies (content-type: application/json) req uired for POST requests
app.use(bodyParser.json());

// Handle cookies by creating them in the server and sending them to the client to store
app.use(cookieParser());

// timeout middleware to prevent the server from hanging if the client takes too long to respond
app.use(timeout("100s"));

// leaderboardTimeSort route returns an array of object
// leaderboardLevelSort route allows the client to sort the leaderboard by level (from greatest to least)
app.get("/leaderboardLevelSort", async (req, res) => {
  let valueSwapped;
  let leaderboard = await leaderboardCollection.find({}).toArray();

  // do-while allows the loop to run at least once
  do {
    valueSwapped = false;

    // compare two values in the array at a time and swap them if the first value is less than the second
    for (let i = 0; i < leaderboard.length - 1; i++) {
      if (leaderboard[i].tailwindLevel < leaderboard[i + 1].tailwindLevel) {
        // destructuring to change the existing values of the in the array that holds all the objects
        // kind of like grabbing both index values in this case, not making new variables
        [leaderboard[i], leaderboard[i + 1]] = [
          leaderboard[i + 1],
          leaderboard[i],
        ];

        // in the context of the actual sorting, the valueSwapped is not going to constantly change to true or false
        // it's a check to make sure the bubble sort keeps iterating until it doesn't need to anymore
        valueSwapped = true;
      }

      // if the levels are equal to each other, also sort by accuracy
      if (leaderboard[i].tailwindLevel === leaderboard[i + 1].tailwindLevel) {
        if (leaderboard[i].accuracy < leaderboard[i + 1].accuracy) {
          [leaderboard[i], leaderboard[i + 1]] = [
            leaderboard[i + 1],
            leaderboard[i],
          ];

          valueSwapped = true;
        }
      }
    }
  } while (valueSwapped);

  return res.send(leaderboard);
});

// leaderboardTimeSort route returns an array of object
// leaderboardTimeSort route allows the client to sort the leaderboard by level (from greatest to least)
app.get("/leaderboardTimeSort", async (req, res) => {
  let valueSwapped;
  let leaderboard = await leaderboardCollection.find({}).toArray();

  do {
    valueSwapped = false;
    for (let i = 0; i < leaderboard.length - 1; i++) {
      if (leaderboard[i].time < leaderboard[i + 1].time) {
        [leaderboard[i], leaderboard[i + 1]] = [
          leaderboard[i + 1],
          leaderboard[i],
        ];

        valueSwapped = true;
      }

      // if the times are equal to each other, also sort by accuracy
      if (leaderboard[i].time === leaderboard[i + 1].time) {
        if (leaderboard[i].accuracy < leaderboard[i + 1].accuracy) {
          [leaderboard[i], leaderboard[i + 1]] = [
            leaderboard[i + 1],
            leaderboard[i],
          ];

          valueSwapped = true;
        }
      }
    }
  } while (valueSwapped);

  return res.send(leaderboard);
});

// leaderboardAccurarySort route returns an array of object
// leaderboardAccurarySort route allows the client to sort the leaderboard by level (from greatest to least)
app.get("/leaderboardAccuracySort", async (req, res) => {
  let valueSwapped;
  let leaderboard = await leaderboardCollection.find({}).toArray();

  do {
    valueSwapped = false;
    for (let i = 0; i < leaderboard.length - 1; i++) {
      if (leaderboard[i].accuracy < leaderboard[i + 1].accuracy) {
        [leaderboard[i], leaderboard[i + 1]] = [
          leaderboard[i + 1],
          leaderboard[i],
        ];

        valueSwapped = true;
      }

      // if the accuraries are equal to each other, also sort by time
      if (leaderboard[i].accuracy === leaderboard[i + 1].accuracy) {
        if (leaderboard[i].time < leaderboard[i + 1].time) {
          [leaderboard[i], leaderboard[i + 1]] = [
            leaderboard[i + 1],
            leaderboard[i],
          ];

          valueSwapped = true;
        }
      }
    }
  } while (valueSwapped);

  return res.send(leaderboard);
});

// leaderboardCharactersSort route returns an array of object
// leaderboardCharactersSort route allows the client to sort the leaderboard by level (from greatest to least)
app.get("/leaderboardCharactersSort", async (req, res) => {
  let valueSwapped;
  let leaderboard = await leaderboardCollection.find({}).toArray();

  do {
    valueSwapped = false;
    for (let i = 0; i < leaderboard.length - 1; i++) {
      if (leaderboard[i].characters < leaderboard[i + 1].characters) {
        [leaderboard[i], leaderboard[i + 1]] = [
          leaderboard[i + 1],
          leaderboard[i],
        ];

        valueSwapped = true;
      }

      // if the characters are equal to each other, also sort by accuracy
      if (leaderboard[i].characters === leaderboard[i + 1].characters) {
        if (leaderboard[i].accuracy < leaderboard[i + 1].accuracy) {
          [leaderboard[i], leaderboard[i + 1]] = [
            leaderboard[i + 1],
            leaderboard[i],
          ];

          valueSwapped = true;
        }
      }
    }
  } while (valueSwapped);

  return res.send(leaderboard);
});

// editLeaderboard route allows the client to edit the leaderboard by adding their information
// the client can add their date, tailwind level, tailwind data, and time of level completion (seconds)
app.post("/editLeaderboard", (req, res) => {
  const { tailwindLevel, time, tailwindCode, date, accuracy, characters } =
    req.body;
  const userAuth = req.cookies.user_auth;

  console.log(userAuth);

  if (userAuth) {
    const { userName } = JSON.parse(userAuth);

    leaderboardCollection
      .insertOne({
        metaData: {
          userName: userName,
          date: date,
        },
        tailwindLevel: tailwindLevel,
        tailwindCode: tailwindCode,
        time: time,
        accuracy: accuracy,
        characters: characters,
      })
      .then(() => {
        return res.send({
          success: true,
          reason: "Successfully added to the leaderboard!",
        });
      })
      .catch((error) => {
        return res.send({ success: false, reason: error });
      });
  } else {
    return res.send({ success: false, reason: "You are not logged in" });
  }
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
      return res.send({ accuracy });
    });
});

// createAccount route allows the client to create a new account that they can use for leaderboards by inserting data into database
// username (string) the username of the client. string must not be ridiculous or already exist
// password (string) the password of the client
app.post("/createAccount", async (req, res) => {
  const { userName, password } = req.body;

  // check if the username passes requirements to create an account
  const check = await userNameCheck(userName, accountsCollection);
  if (check !== true) return res.send({ success: false, reason: check });

  await accountsCollection
    .insertOne({
      userName: userName,
      password: password,
    })
    .catch((error) => {
      return res.send({ success: false, reason: error });
    });

  res.cookie(
    "user_auth",
    JSON.stringify({ userName: userName, password: password }),
    {
      httpOnly: false,
      secure: false,
      maxAge: 60 * 60 * 24, // 24 hours
      sameSite: "lax",
    }
  );

  return res.send({
    success: true,
  });
});

app.post("/loginAccount", async (req, res) => {
  const { userName, password } = req.body;

  await accountsCollection.findOne({ userName, password }).then((user) => {
    if (user === null) {
      return res.send({ success: false, reason: "bad username or password" });
    }

    res.cookie(
      "user_auth",
      JSON.stringify({ userName: userName, password: password }),
      {
        httpOnly: false,
        secure: false,
        maxAge: 60 * 60 * 24000,
        sameSite: "none",
        secure: true,
      }
    );

    return res.send({ success: true });
  });
});

// check if a cookie exists in the client. cookies are automatically sent to the backend from the client
app.get("/checkCookie", async (req, res) => {
  const userAuth = req.cookies.user_auth;

  if (userAuth) {
    return res.send({ success: true });
  } else {
    return res.send({ success: false });
  }
});

// this test is going to take the content from the POST request body and send it back to the client
app.post("/test", async (req, res) => {
  const { content } = req.body;

  return res.send({ content });
});

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.listen(5000, async () => {
  console.log("Server listening on port 5000");
});
