const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (
    Object.prototype.toString.call(date) !== "[object Date]" ||
    !(date instanceof Date)
  ) {
    throw new Error("Invalid date!");
  }
  if (!date) {
    throw new Error("Unable to determine the time of year!");
  }
  const seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    fall: [8, 9, 10],
  };

  const month = date.getMonth();
  for (const season in seasons) {
    if (seasons[season].includes(month)) {
      return season;
    }
  }
}

module.exports = {
  getSeason,
};
