const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const zeroRows = new Array(cols).fill(false); // initialize zeroRows to all false values
  let sum = 0;

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      if (matrix[i][j] === 0) {
        zeroRows[j] = true; // mark this column as having a zero value
        break; // move on to the next column
      } else if (!zeroRows[j]) {
        sum += matrix[i][j]; // add this value to the sum if we haven't seen a zero in this column yet
      }
    }
  }

  return sum;
}


module.exports = {
  getMatrixElementsSum
};
