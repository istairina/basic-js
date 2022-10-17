const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == '') {
    return str;
  }
  
  let arr = Array.from(str);
  let strResult = "";
  let sym = "";
  let countSym = 0;
  

  for (let i = 0; i < arr.length; i++) {
    
    if (sym == "") {
      sym = arr[i];
      //console.log(sym);
    }
    
    if (sym == arr[i]) {
      countSym++;
      console.log(arr[i] + " " + countSym);
      if (i == arr.length - 1) {
        if (countSym == 1) {
          strResult += sym;
          }
          else {
            strResult += countSym + sym;
          }
      }
    }
    else {
      if (countSym == 1) {
      strResult += sym;
      }
      else {
        strResult += countSym + sym;
      }
      i--;
      countSym = 0;
      sym = "";
      
    }
  }
  return strResult;
}

module.exports = {
  encodeLine
};


console.log(encodeLine('aabbbc'));