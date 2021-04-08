import isArray from "./isArray";
import isNumber from "../number/isNumber";

/**
 * Inserts an element at the desired index.
 *
 * @param {Array} array Where the element will be inserted.
 * @param {number} index The desired index.
 * @param {any} elementToInsert The element to insert in the array.
 * @returns {Array} A new array with the element inserted at the desired index.
 */

function insertAt(array, index, elementToInsert) {
  if(isArray(array) && isNumber(index)) {
    let newArray = [...array];
    newArray.splice(index, 0, elementToInsert);
    return newArray;
  }

  return array;
};

export default insertAt
