const {
  goto,
  reload,
  storage: { localStorage },
} = require('taiko');

step("J'ouvre la page <page>", async () => {
  await goto(process.env.SITE_URL);
});

step('Je recharge la page', async () => {
  await reload();
});

step('Je vide mon local storage', async () => {
  await localStorage.clear();
});
