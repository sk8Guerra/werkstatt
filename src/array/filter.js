/**
 * Returns a new array populated with only that return
 * true from the provided function.
 *
 * @param {Array} array The array to process.
 * @param {Function} testFn A function that describes the test condition.
 * @returns {Array} New array with new values.
 */
import isArray from './isArray';
import areEqual from '../other/areEqual';
import typeOf from '../other/typeOf';

const filter = (array, testFn) => {
  try {
    if (isArray(array) && areEqual(typeOf(testFn), 'function')) {
      const filtered = [];
      let index;
      for (index = 0; index < array.length; index += 1) {
        if (testFn(array[index], index)) {
          filtered.push(array[index]);
        }
      }
      return filtered;
    }

    return array;
  } catch (error) {
    return [];
  }
};

export default filter;
