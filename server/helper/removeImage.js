const fs = require("fs").promises;

// removes the image specified by the server path
// path (string) the path to the image to be removed
async function removeImage(path) {
  try {
    await fs.unlink(path);
  } catch (err) {
    console.error(err);
  }
}

module.exports = removeImage;
