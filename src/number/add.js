import isArrayOfNumbers from '../array/isArrayOfNumbers';
import reduce from '../array/reduce';
import map from '../array/map';
import isArray from '../array/isArray';

/**
 * Add n amount of numbers.
 *
 * NOTE: if any of the passed values is not a number, it will return 0.
 *
 * @param {number[]} values n amount of numbers to add.
 * @returns {number} The result of adding all the numbers.
 */

const add = (...values) => {
  const value = values[0];
  if (isArray(value) && isArrayOfNumbers(value)) {
    return reduce(map(value, x => Number(x)));
  }

  if (isArrayOfNumbers(values)) {
    return reduce(map(values, x => Number(x)));
  }

  return 0;
};

export default add;
