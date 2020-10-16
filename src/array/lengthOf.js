
/**
 * Get length of a JSON or an array.
 *
 * @param {(Object|Array)} value The json or array to get the length from.
 * @returns {number} The length.
 */

function lengthOf(value) {
  if(Object.getPrototypeOf(value) === Object.prototype) {
    return Object.keys(value).length;
  }
  return value.length;
}

export default lengthOf;