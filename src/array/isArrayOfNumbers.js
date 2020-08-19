const { isNumber } = require('../number/isNumber');

function isArrayOfNumbers(array) {
  for (let number = 0; number < array.length; number++) {
    if (isNumber(array[number])) continue;
    return false;
  }
  return true;
}

module.exports = { isArrayOfNumbers };