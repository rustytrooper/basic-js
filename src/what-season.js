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

  try {
    let now = new Date()
    if (date == now.toString()) {
      throw new Error('Invalid date!')
    }
    if (Object.prototype.toString.call(date) === '[object Date]') {
      let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      let dateStr = Array.from(date.toString()).join('').split(' ')
      let month = dateStr[1];

      for (let i = 0; i < monthArr.length; i++) {
        if (month == monthArr[0] || month == monthArr[1] || month == monthArr[monthArr.length - 1]) {
          return 'winter'
        } else if (month == monthArr[2] || month == monthArr[3] || month == monthArr[4]) {
          return 'spring'
        } else if (month == monthArr[5] || month == monthArr[6] || month == monthArr[7]) {
          return 'summer'
        } else if (month == monthArr[8] || month == monthArr[9] || month == monthArr[10]) {
          return 'autumn'
        }
      }
    }
    throw date
  } catch (err) {

    let now = new Date();
    if (date == now.toString()) {
      throw new Error('Invalid date!')
    }

    if (arguments.length === 0) {
      return 'Unable to determine the time of year!'
    } else if (Object.prototype.toString.call(date) === '[object Date]' && arguments.length === 0) {
      throw new Error('Invalid date!')
    } else {
      throw new Error('Invalid date!')
    }
  }
}

module.exports = {
  getSeason
};
