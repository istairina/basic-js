const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n.length < 2) {return n;}

  let sumStr = String(n);
  let sum = 0;
  let lenN;
  
  
  function sumElements(number) {
    lenN = number.length;
    //console.log(number[0]);
    sum = 0;
    if (lenN == 1) {
      //console.log('should stop' + number);
      let num = Number(number);
      return num;
      
    }
    else {
      sum = 0;
      for (let i = 0; i < lenN; i++) {
        
        sum += Number(number[i]);
        console.log(sum + " " + i);
        
        
      }
      
    }
    //console.log(String(sum) + " check");
    let k = String(sum);
    sum = sumElements(k);
    return Number(sum);
  }
  
  sumElements(sumStr);
  //console.log(sum);
  return Number(sum);

}

module.exports = {
  getSumOfDigits
};


console.log(getSumOfDigits(91));