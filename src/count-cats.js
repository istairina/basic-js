const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {

  let cats = 0;
  let backyard = arguments[0];
   
  for (let i = 0; i < backyard.length; i++) {
    //console.log(backyard[i]);
    let meadow = backyard[i];
    for (let k = 0; k < meadow.length; k++) {
      if (meadow[k] == "^^") {cats++;}
    }
  }

  return cats;
}

console.log(countCats([
[0, 1, '^^'],
[0, '^^', 2],
['^^', 1, 2]
]));



module.exports = {
  countCats
};
