import typeOf from '../other/typeOf';
import areEqual from '../other/areEqual';

/**
 * Returns the lowest-valued number passed into it.
 *
 * @param {number} values Values to check.
 * @returns {number} The lowest-valued number.
 */

const min = (...array) => {
  if (areEqual(typeOf(array[0]), 'array')) {
    return Math.min.apply(Math, array[0]);
  }
  return Math.min.apply(Math, array);
};

export default min;