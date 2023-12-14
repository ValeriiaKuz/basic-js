const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const charactersFromS1 = new Set(s1.split(""));
  const charactersFromS2 = new Set(s2.split(""));
  if (charactersFromS1.size === 0 || charactersFromS2.size === 0) {
    return result;
  }

  const intersection = (ar1, ar2) => {
    return ar1.filter((value) => ar2.includes(value));
  };
  const commonCharacters = intersection(
    [...charactersFromS1],
    [...charactersFromS2],
  );

  commonCharacters.forEach((character) => {
    const countInS1 = s1.split("").filter((c) => c === character).length;
    const countInS2 = s2.split("").filter((c) => c === character).length;
    result += Math.min(countInS1, countInS2);
  });
  return result;
}

module.exports = {
  getCommonCharacterCount,
};
