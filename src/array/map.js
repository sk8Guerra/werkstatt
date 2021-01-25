

/**
 * Returns a new array populated with the results of calling a provided function on every element of the passed array.
 *
 * @param {Array} array The array to process.
 * @param {Function} transform A function that describes calculation to new values.
 * @returns {Array} New array with new values.
 */

const map = (array, transform) => {
  let mapped = [], index;
  for (index = 0; index < array.length; index++) {
      mapped.push(transform(array[index]));
  }
  return mapped;
};

export default map;