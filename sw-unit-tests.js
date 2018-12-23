importScripts('/node_modules/mocha/mocha.js');

mocha.setup({
  ui: 'bdd',
  reporter: null,
});

describe('First SW Test Suite', function() {
  it('should test something', function() {
    ...
  });
});

const runResults = mocha.run();
runResults.on('end', () => {
  console.log(`${runResults.failures} out of ${runResults.total} failures.`);
});
