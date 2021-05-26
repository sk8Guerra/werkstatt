import isArray from '../array/isArray';

/**
 * Returns the largest value from a list of numbers.
 *
 * @param {Array<number>} values Values to check.
 * @returns {number} The largest number.
 */

const max = (...values) => {
  const [value] = values;
  if (isArray(value)) {
    return Math.max.apply(Math, value);
  }
  return Math.max.apply(Math, values);
};

export default max;
