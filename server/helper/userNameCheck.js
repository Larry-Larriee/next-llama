require("dotenv").config();
const invalidWords = ["fuck", "shit", "ass", "butt", "boobs"];

// checks if the userName meets the requirements to make a new account
// userName (string) the userName to check
// accountsCollection (string) the mongoDB collection for user accounts
async function userNameCheck(userName, accountsCollection) {
  const user = await accountsCollection.findOne({ userName });

  return new Promise((resolve, reject) => {
    for (let word of invalidWords) {
      if (userName.includes(word)) {
        resolve("please choose a better name");
      }
    }

    if (user) {
      resolve("User already exists");
    } else if (userName.length > 50) {
      resolve("Username is too long");
    }

    resolve(true);
  });
}

module.exports = userNameCheck;
