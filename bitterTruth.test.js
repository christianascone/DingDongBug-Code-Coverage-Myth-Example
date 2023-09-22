const processInput = require('./index.js');

test('pass a short string', () => {
  const input = 'Short';
  let result = processInput(input);
  expect(result).not.toBe(null);
  expect(result.isLong).toBe(false);
  expect(result.text).toBe(input.toUpperCase());
});

test('pass an empty string', () => {
  const input = '';
  let result = processInput(input);
  expect(result).not.toBe(null);
  expect(result.isLong).toBe(false);
  expect(result.text).toBe(input);
});

test('pass null', () => {
  expect(() => {
    processInput(null);
  }).toThrow();
});
