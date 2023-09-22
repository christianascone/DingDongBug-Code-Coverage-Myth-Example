const processInput = require('./index.js');

test('pass a short string', () => {
  let result = processInput("Short");
  expect(result).not.toBe(null);
});
test('pass a long string', () => {
  let result = processInput("Longer string");
  expect(result).not.toBe(null);
});
