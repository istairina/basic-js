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
function deleteDigit(/* n */) {
  let givenStr = String(arguments[0]);
  let arrNumber = [];
  let k = 0;

  let tempNumber;

  for (let i = 0; i < givenStr.length; i++) {
    tempNumber = givenStr;

    tempNumber = tempNumber.slice(0, i) + tempNumber.slice(i + 1);

    arrNumber[k] = Number(tempNumber);
    k++;
  }

  arrNumber.sort(function(a, b) {
    return b - a;
  });

  //console.log(arrNumber);

  return arrNumber[0];
}

module.exports = {
  deleteDigit
};

console.log(deleteDigit(152));