// returns random characters of a specified length
// length (number) the length of the random characters
function randomChar(length = 10) {
  return new Promise((resolve, reject) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    // retrieves a random index in the characters string and gets the character at that index
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    resolve(result);
  });
}

module.exports = randomChar;
