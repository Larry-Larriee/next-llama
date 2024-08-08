// copyPaste uses puppeteer to copy a given string and paste it into an input field on the page
// page (object) the puppeteer page object
// selector (string) the selector of the input field
// text (string) the string to be copied and pasted
async function pasteText(page, selector, string) {
  // Copy text to clipboard
  await page.evaluate((text) => {
    navigator.clipboard.writeText(text);
  }, string);

  await page.focus(selector);

  await page.keyboard.down("Control");
  await page.keyboard.press("KeyV");
  await page.keyboard.up("Control");

  return new Promise((resolve) => resolve());
}

module.exports = pasteText;
