import isArrayOfNumbers from '../array/isArrayOfNumbers';

/**
 * Add n amount of numbers.
 *
 * @param {number[]} values n amount of numbers to add.
 * @returns {number} The result of adding all the numbers.
 */

function add(...values) {
  if (isArrayOfNumbers(values)) return values.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
};

export default add;
