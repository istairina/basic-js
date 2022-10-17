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
  let sum = 0;
  columnns = matrix[0].length;
  for (let k = 0; k < columnns; k++) {
    for (let i = 0; i < matrix.length; i++) {
      //console.log(i + " " + k);
      if (matrix[i][k] != 0) {
        sum += matrix[i][k];
      } else {
        break;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};


matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

console.log(getMatrixElementsSum(matrix));
  