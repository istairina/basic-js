const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') {
    return false;
  }
  let numSampleActivity = Number(sampleActivity);
  //console.log(numSampleActivity);
  if (isNaN(numSampleActivity) || numSampleActivity <= 0 || numSampleActivity > 15) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let approxAge = MODERN_ACTIVITY / numSampleActivity;

  let t = Math.ceil((Math.log(approxAge) / k));

  //console.log(t);

  return t;


  
}

module.exports = {
  dateSample
};


//test = 1;
//dateSample(test);

/*
      ln(N0 / N)
  t = -----------
           k

*/