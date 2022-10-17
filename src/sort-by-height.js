const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrTemp = [];
  let index = 0;
  for (let elem of arr) {
    if (elem != -1) {
      arrTemp.push(elem);
    }
  }

  arrTemp.sort((a, b) => a - b);
  //console.log(arrTemp[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != -1) {
      arr[i] = arrTemp[index];
      index++;
    }
  }
  
  return arr;

}

module.exports = {
  sortByHeight
};


console.log(sortByHeight([4, 2, 9, 11, 2, 16]));