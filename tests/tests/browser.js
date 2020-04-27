const { goto } = require('taiko');

step("J'ouvre la page <page>", async () => {
  await goto(process.env.SITE_URL);
});
