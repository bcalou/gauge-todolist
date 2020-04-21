const { goto } = require('taiko');
const SITE_URL = 'localhost:3000';

step("J'ouvre la page <page>", async () => {
  await goto(SITE_URL);
});
