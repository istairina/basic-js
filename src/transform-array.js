const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log("arguments " + arguments);
  let strDisNext = '--discard-next';
  let strDisPrev = '--discard-prev';
  let strDblNext = '--double-next';
  let strDblPrev = '--double-prev';
  let newArr = [];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  
  for (let k = 0; k < arr.length; k++) {
    newArr[k] = arr[k];
  }


  here:
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i] + " " + i);
    
    if (newArr[i] == strDisNext) {
      console.log("dicrad next start");
      if (newArr[i + 1]) {
        if (newArr[i + 2] == strDblPrev || newArr[i + 2] == strDisPrev) {
          newArr.splice(i + 2, 1);
        }
        newArr.splice(i, 2);
        break here;
      } else {
      newArr.splice(i, 1);
      break here;
      }
    }

    if (newArr[i] == '--discard-prev') {
      console.log("dicrad prev start");
      if (newArr[i - 1]) {

        newArr.splice((i - 1), 2);
        break here;
      } else {
        console.log(newArr);
        newArr.splice(i, 1);
        console.log(newArr + " spliced");
        break here;
      }
    }

    if (newArr[i] == strDblNext) {
      console.log("double next start");
      if (newArr[i + 1]) {
        console.log('here');
        newArr[i] = newArr[i + 1];
      }
      else {
        newArr.splice(i, 1);
        break here;
      }
    }

    if (newArr[i] == strDblPrev) {
      console.log("double prev start");
      if (newArr[i - 1]) {
        newArr[i] = newArr[i - 1];
      } else {
        newArr.splice(i, 1);
        break here;
      }
    }
  }


return newArr;

}

module.exports = {
  transform
};

console.log(transform(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])));