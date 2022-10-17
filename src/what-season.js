const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }

  //console.log(Object.keys(date).length);

  
 /*if (Object.keys(date)) {
    console.log('yes');
    
  } else console.log('no');
  //console.log(Date.parse(date));

/* if (date.hasOwnProperty('getMonth')) {
    console.log('yes');
  } else console.log('no');*/

  if (Number.isNaN(Date.parse(date)) || date.hasOwnProperty('getMonth') || Object.keys(date).length > 0) {
    //console.log('check');
    throw new Error('Invalid date!');
  } 

  let arrSeasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer',
'autumn', 'autumn', 'autumn', 'winter'];
  
  /*if (typeof date != 'object') {
    throw new Error('Invalid date!');
  }*/

  //console.log(date.getMonth());
  return (arrSeasons[date.getMonth()]);


}

module.exports = {
  getSeason
};

/*console.log(getSeason(new Date(2020, 02, 31)));

const fakeDate = {
                toString() {
                    return Date.prototype.toString.call(new Date());
                },
                [Symbol.toStringTag]: 'Date'
            };

            Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
            getSeason(fakeDate);
            */
