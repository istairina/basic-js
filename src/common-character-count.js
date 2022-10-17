const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  let arrS1 = arguments[0].split('');
  let arrS2 = arguments[1].split('');
  let commonChar = 0;
  //console.log(arrS1);

  there:
  for (let i = 0; i < arrS1.length; i++) {
    
    for (let k = 0; k < arrS2.length; k++) {
      //console.log(arrS1[i]);
      if ((arrS1[i] == arrS2[k]) && (arrS2[k] != undefined)) {
        commonChar++;
        console.log(arrS1[i] + " " + arrS2[i]);
        delete arrS2[k];
        continue there;
      }
    }

    

  }
  //console.log(arrS2);
  return commonChar;

}

module.exports = {
  getCommonCharacterCount
};

console.log(getCommonCharacterCount("aabcc", "adcaa"));