import typeOf from '../other/typeOf';
import areEqual from '../other/areEqual';

/**
 * Returns the largest value from a list of numbers.
 *
 * @param {Array<number>} values Values to check.
 * @returns {number} The largest number.
 */

const max = (...values) => {
  if (areEqual(typeOf(values[0]), 'array')) {
    return Math.max.apply(Math, values[0]); 
  }
  return Math.max.apply(Math, values); 
}

export default max;