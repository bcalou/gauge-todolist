const { write, textBox, press } = require('taiko');

step(
  "Je tape <value> dans l'input <placeholder>",
  async (value, placeholder) => {
    await write(value, textBox({ placeholder }));
  },
);

step("J'appuie sur la touche <key>", async (key) => {
  await press(key);
});
