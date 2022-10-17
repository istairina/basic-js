const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  
  let stringToRepeat = String(arguments[0]);
  let objCondition = {};
  let additionStringToRepeat = "";
  let separator = "";
  let additionSeparator = "";
  let repeatTimes = 0;
  let additionRepeatTimes = 0;
  let arrayRepeat = [];
  let additionArrayRepeat = [];

    objCondition = arguments[1];
    separator = objCondition['separator'] ? objCondition['separator'] : '+';
    additionSeparator = objCondition['additionSeparator'] ? objCondition['additionSeparator'] : '|';
    repeatTimes = objCondition['repeatTimes'] ? objCondition['repeatTimes'] : 1;
    additionRepeatTimes = objCondition['additionRepeatTimes'] ? objCondition['additionRepeatTimes'] : 1;

  if (!(objCondition['addition'] === undefined)) {
    additionStringToRepeat = String(objCondition['addition']);

    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArrayRepeat.push(additionStringToRepeat);
    }

    additionStringToRepeat = additionArrayRepeat.join(additionSeparator);

    stringToRepeat += additionStringToRepeat;

  }
  

  for (let i = 0; i < repeatTimes; i++) {

    arrayRepeat.push(stringToRepeat);
  }

  let resString = arrayRepeat.join(separator);
  console.log(resString);

  return resString;

}

module.exports = {
  repeater
};


//console.log(repeater('la', { repeatTimes: 3 }));
console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));