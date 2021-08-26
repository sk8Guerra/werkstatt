import isArray from '../array/isArray';

/**
 * Returns the lowest-valued number passed into it.
 *
 * @param {Array<number>} values Values to check.
 * @returns {number} The lowest-valued number.
 */

const min = (...values) => {
  const [value] = values;
  if (isArray(value)) {
    return Math.min.apply(Math, value);
  }
  return Math.min.apply(Math, values);
};

export default min;
