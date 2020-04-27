const { accessibility } = require('taiko');
const assert = require('assert');
const colors = require('colors');

step("Les normes d'accessibilité sont respectées", async () => {
  const audit = await accessibility.runAudit();

  if (audit.violations.length) {
    logViolations(audit.violations);
  }

  assert.equal(0, audit.violations.length);
});

function logViolations(violations) {
  console.log('!', `\n${violations.length} erreur(s) d'accessibilité :`);

  violations.forEach((violation) => {
    console.log(colors.yellow.bold(violation.id));
    console.log(violation.description);

    if (violation.nodes) {
      violation.nodes.forEach((node) => {
        console.log(colors.grey(node.html));
      });
    }

    console.log(colors.cyan(violation.helpUrl));

    console.log('———————');
  });
}
