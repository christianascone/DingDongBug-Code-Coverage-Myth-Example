function processInput(input) {
  let output = input.toUpperCase();
  let longString = false;
  if (output.length > 5) {
    output += '_longString';
    longString = true;
  }
  return {
    text: output,
    isLong: longString
  };
}
module.exports = processInput;
