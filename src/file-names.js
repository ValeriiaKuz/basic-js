const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return [];
  }
  const result = [names[0]];

  for (let i = 1; i < names.length; i++) {
    let newName = names[i];
    if (result.includes(newName)) {
      let k = 1;
      while (result.includes(newName + `(${k})`)) {
        k++;
      }
      newName = newName + `(${k})`;
    }
    result.push(newName);
  }
  return result;
}

module.exports = {
  renameFiles,
};
