/**
 * Returns a new array populated with the results of calling a
 * provided function on every element of the passed array.
 *
 * @param {Array} array The array to process.
 * @param {Function} transform A function that describes calculation to new values.
 * @returns {Array} New array with new values.
 */
import isArray from './isArray';
import areEqual from '../other/areEqual';
import typeOf from '../other/typeOf';

const map = (array, transform) => {
  if (isArray(array) && areEqual(typeOf(transform), 'function')) {
    const mapped = [];
    let index;
    for (index = 0; index < array.length; index++) {
      mapped.push(transform(array[index], index));
    }
    return mapped;
  }

  return array;
};

export default map;
