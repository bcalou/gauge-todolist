/* globals gauge*/
'use strict';
const { openBrowser, closeBrowser } = require('taiko');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
  await openBrowser({ headless: headless, args: ['--window-size=1440,900'] });
});

afterSuite(async () => {
  await closeBrowser();
});

// gauge.screenshotFn = async function () {
//   return await screenshot({ encoding: 'base64' });
// };
