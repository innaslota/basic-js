const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const result = [];

  // Initialize result matrix with zeros
  for (let i = 0; i < numRows; i++) {
    result[i] = Array(numCols).fill(0);
  }

  // Iterate over each cell in the matrix
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (matrix[i][j]) {
        // If cell is a mine, set corresponding cell in result matrix to -1
        result[i][j] = -1;
      } else {
        // Otherwise, count number of neighboring mines
        let count = 0;
        for (let x = i - 1; x <= i + 1; x++) {
          for (let y = j - 1; y <= j + 1; y++) {
            if (x >= 0 && x < numRows && y >= 0 && y < numCols && matrix[x][y]) {
              count++;
            }
          }
        }
        result[i][j] = count;
      }
    }
  }

  return result;
}


module.exports = {
  minesweeper
};
