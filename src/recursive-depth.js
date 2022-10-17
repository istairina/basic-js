const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

constructor () {
  
}

  calculateDepth(arr) {
    //let self = this;
    
    let depth = 1;
    //console.log(this.dive + " > " + this.deep);
    
        //console.log("depth up " + depth);
    
    for (let i = 0; i < arr.length; i++) {
      
      if (Array.isArray(arr[i])) {
        let counter = this.calculateDepth(arr[i]) + 1;
        //console.log(arr[i] + " " + counter);
        //console.log(counter++);
        if (counter > depth) {
          //console.log("before " + depth + " " + counter);
          depth = counter;
          //console.log(depth + " " + counter);
          
        }

      }

    }

    
    //counter = 1;
    return depth;

  }
       
 
  
}

module.exports = {
  DepthCalculator
};

const depthCalc = new DepthCalculator();
//console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));
//console.log(depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []])); //3
//console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5, [1]])); // 2
console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));  //25