const { isArrayOfNumbers } = require('../array/isArrayOfNumbers');

function add(...values) {
  if (isArrayOfNumbers(values)) return values.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
};

module.exports = { add };
