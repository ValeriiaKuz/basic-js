const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  const allCharacters = str.split("");
  let prev = allCharacters[0];
  let count = 1;

  for (let i = 1; i < allCharacters.length; i++) {
    const currentChar = allCharacters[i];
    if (currentChar === prev) {
      count += 1;
    } else {
      result = result + (count > 1 ? count + prev : prev);
      prev = currentChar;
      count = 1;
    }
    if (i === allCharacters.length - 1) {
      result += count > 1 ? count + prev : prev;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
