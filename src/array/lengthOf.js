import isDefined from "../other/isDefined";

/**
 * Get length of a JSON or an array.
 *
 * @param {(Object|Array)} value The json or array to get the length from.
 * @returns {number} The length.
 */

const lengthOf = (value) => {
  if(isDefined(value)) {
    if(Object.getPrototypeOf(value) === Object.prototype) {
      return Object.keys(value).length;
    }
    return value.length;
  }

  return 0;
}

export default lengthOf;
