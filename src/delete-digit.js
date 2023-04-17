const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split(''); // convert to string and split into array of digits
  let max = -Infinity;
  for (let i = 0; i < digits.length; i++) {
    const deleted = Number(digits.slice(0, i).concat(digits.slice(i+1)).join('')); // delete digit at index i
    if (deleted > max) {
      max = deleted;
    }
  }
  return max;
}


module.exports = {
  deleteDigit
};
