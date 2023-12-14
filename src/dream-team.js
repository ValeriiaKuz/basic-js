const { NotImplementedError } = require("../extensions/index.js");
const { isString } = require("mocha/lib/utils");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const names = [];
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }
  members.forEach((member) => {
    isString(member) ? names.push(member.trim().charAt(0).toUpperCase()) : null;
  });
  if (names.length === 0) {
    return false;
  }
  return names.sort().join("");
}

module.exports = {
  createDreamTeam,
};
