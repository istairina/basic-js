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
  let domStr = domains.join('.');
  let domArr = domStr.split('.');
  let key = '';
  domArr.reverse();
  console.log(domArr);

  for (let name of domArr) {
    key += `.${name}`;
    if (result[key]) {
      result[key]++;
    } else {
      result[key] = 1;
    }
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