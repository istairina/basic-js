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
  
  let matrixRes = new Array(matrix.length);

  for (let i = 0; i < matrix.length; i++) {
    matrixRes[i] = Array(matrix[0].length).fill(0);
  }

  for (let i = 0; i < matrix.length; i++) {
    
    for (let k = 0; k < matrix[0].length; k++) {
      
      if (matrix[i][k] == true) {
        console.log(matrix[i][k]);
        if (matrixRes[i][k + 1] != undefined) {
          console.log("ttt");
          matrixRes[i][k + 1]++;}
        if (matrixRes[i][k - 1] != undefined) {matrixRes[i][k - 1]++;}
        if (matrixRes[i + 1][k] != undefined) {matrixRes[i + 1][k]++;}
        if (matrixRes[i + 1][k + 1] != undefined) {matrixRes[i + 1][k + 1]++;}
        if (matrixRes[i + 1][k - 1] != undefined) {matrixRes[i + 1][k - 1]++;}
        
        if (i > 0) {
        if (matrixRes[i - 1][k] != undefined) matrixRes[i - 1][k]++;
        if (matrixRes[i - 1][k - 1] != undefined) matrixRes[i - 1][k - 1]++;
        if (matrixRes[i - 1][k + 1] != undefined) matrixRes[i - 1][k + 1]++;
        }
      }
    }
  }
  return matrixRes;
}

module.exports = {
  minesweeper
};


matrix = [
[true, false, false],
[false, true, false],
[false, false, false]
];

console.log(minesweeper(matrix));
