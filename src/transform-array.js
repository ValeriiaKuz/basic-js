const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (Array.isArray(arr) && arr.length === 0) {
    return [];
  }
  const actions = [
    "--double-next",
    "--double-prev",
    "--discard-prev",
    "--discard-next",
  ];

  const result = [];
  let isNext = false;

  arr.forEach((item, index) => {
    if (actions.includes(item)) {
      if (item === actions[0]) {
        if (arr[index + 2] === actions[1]) {
          result.push(arr[index + 1]);
        } else {
          index !== arr.length - 1 && result.push(arr[index + 1]);
        }
        isNext = false;
      }
      if (item === actions[1]) {
        arr[index - 2] !== actions[3] &&
          index !== 0 &&
          result.push(arr[index - 1]);
        isNext = false;
      }
      if (item === actions[2]) {
        if (arr[index - 2] !== actions[3]) {
          index !== 0 && result.splice(-1, 1);
        }
        isNext = false;
      }
      if (item === actions[3]) {
        isNext = true;
      }
    } else {
      !isNext && result.push(item);
      isNext = false;
    }
  });
  return result;
}

module.exports = {
  transform,
};
