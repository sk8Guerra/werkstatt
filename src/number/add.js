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
  const [value] = values;
  if (isArray(value) && isArrayOfNumbers(value)) {
    return reduce(map(value, element => Number(element)));
  }

  if (isArrayOfNumbers(values)) {
    return reduce(map(values, element => Number(element)));
  }

  return 0;
};

export default add;
