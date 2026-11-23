const puppeteer = require('puppeteer');
async function getProfilePic(cashtag) {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto([https://cash.app/$](https://cash.app/$){cashtag});
try {
const img = await page.$eval('img', el => el.src);
console.log(img);
return img;
} catch (e) {
console.log('Profile pic not found');
} finally {
await browser.close();
}
}
