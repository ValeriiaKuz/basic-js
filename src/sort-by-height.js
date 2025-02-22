const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  const arrayWithOutMinusOne = arr.filter((item) => item !== -1);
  const sortedArray = arrayWithOutMinusOne.sort((a, b) => b - a);
  arr.forEach((item) => {
    if (item === -1) {
      result.push(-1);
    } else {
      result.push(sortedArray.pop());
    }
  });
  return result;
}

module.exports = {
  sortByHeight,
};
