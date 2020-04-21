const {
  text,
  below,
  textBox,
  $,
  hover,
  click,
  checkBox,
  near,
  evaluate,
} = require('taiko');
const assert = require('assert');

async function todoExists(todoName) {
  return await text(
    todoName,
    below(textBox({ placeholder: 'What needs to be done?' })),
  ).exists(1000, 1000);
}

step(
  'La todo <todoName> fait partie de la liste des todos',
  async (todoName) => {
    const exists = await todoExists(todoName);

    assert.ok(exists);
  },
);

step('Il y a <count> todos dans la liste', async (count) => {
  await assert.equal(
    (await $('.todo-list li').elements()).length,
    parseInt(count),
  );
});

step('Je clique sur la checkbox de la todo <todoName>', async (todoName) => {
  await click(checkBox(near(todoName)));
});

step('Il y a <count> todos à valider', async (count) => {
  await text(`${count} items left`).exists();
});

step(
  'Je clique sur le bouton supprimer de la todo <todoName>',
  async (todoName) => {
    await hover(todoName);
    await click($('button.destroy'));
  },
);

step(
  'La todo <todoName> ne fait pas partie de la liste des todos',
  async (todoName) => {
    const exists = await todoExists(todoName);

    assert.ok(!exists);
  },
);
