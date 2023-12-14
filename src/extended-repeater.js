const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : "+";
  const addition =
    options.addition === false
      ? false
      : options.addition === null
      ? null
      : options.addition || "";
  const additionRepeat = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  const additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";
  let strWithAdditions =
    str +
    (addition + additionSeparator)
      .repeat(additionRepeat)
      .slice(0, -additionSeparator.length);
  return (strWithAdditions + separator)
    .repeat(repeatTimes)
    .slice(0, -separator.length);
}

module.exports = {
  repeater,
};
