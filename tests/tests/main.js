/* globals gauge*/
'use strict';
const {
  openBrowser,
  closeBrowser,
  storage: { localStorage },
} = require('taiko');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
  await openBrowser({ headless: headless });
});

afterScenario(async () => {
  await localStorage.clear();
});

afterSuite(async () => {
  await closeBrowser();
});

// gauge.screenshotFn = async function () {
//   return await screenshot({ encoding: 'base64' });
// };
