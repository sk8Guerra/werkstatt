
/**
 * Inserts an element at the desired index.
 *
 * @param {Array} array Where the element will be inserted.
 * @param {number} index The desired index.
 * @param {any} elementToInsert The element to insert in the array.
 * @returns {Array} A new array with the element inserted at the desired index.
 */

function insertAt(array, index, elementToInsert) {
  var newArray = [...array];
  newArray.splice(index, 0, elementToInsert);
  return newArray;
};

export default insertAt