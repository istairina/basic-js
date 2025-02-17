const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let domElem;
  let key = '';

  for (let i = 0; i < domains.length; i++) {
    domElem = domains[i].split('.').reverse();
    console.log(domElem);
    for (let k = 0; k < domElem.length; k++) {
      key += `.${domElem[k]}`;
      if (result[key]) {
        result[key]++;
      } else {
        result[key] = 1;
      }
      
    }
    key = ""; 
  }
return result;
}

module.exports = {
  getDNSStats
};


domains = [
'code.yandex.ru',
'music.yandex.ru',
'yandex.ru'
];
  
console.log(getDNSStats(domains));