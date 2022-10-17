const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arrMac = n.split('-');
  if (arrMac.length !=6) {
    return false;
  }
  
  //console.log(isNaN(parseInt(arrMac[0], 16)));

  for (let i = 0; i < arrMac.length; i++) {
    
    console.log(isNaN(parseInt(arrMac[i], 16)));
    if (isNaN(parseInt(arrMac[i], 16))) {
      return false;
    }
  };

  return true;


}
module.exports = {
  isMAC48Address
};


console.log(isMAC48Address('KK-1B-63-84-45-E6'));