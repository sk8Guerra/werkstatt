const { isOdd } = require('./isOdd');

function isEven(value) {
  return !isOdd(value);
};

module.exports = { isEven }