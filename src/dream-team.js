const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  if (!Array.isArray(arguments[0])) {
    return false;
  }

  let resArr = [];
  let tempStr = "";
  arguments[0].forEach(element => { 
    
    if ((typeof element === 'string') && (element != '')) {
      tempStr = element.replace(/\s/g, '');
      resArr.push(tempStr[0].toUpperCase());
    } 
  });

  if (resArr == []) {return false;}

  resArr.sort();
  console.log(resArr.join(''));

  return resArr.join('');
  
}

module.exports = {
  createDreamTeam
};

