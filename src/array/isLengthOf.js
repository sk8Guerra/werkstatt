import areEqual from '../other/areEqual';
import typeOf from '../other/typeOf';

/**
 * Useful to ensure that a json or an array has a specific length.
 *
 * @param {(Object|Array)} value The json or array to get the length from.
 * @param {number} len The expected length.
 * @returns {boolean} true: if the length is the same as expected. false: if the length is not the same as expected.
 */

function isLengthOf(value, len) {
  if (areEqual(typeOf(value), 'undefined') || areEqual(typeOf(value), 'null')) return false;
  if(Object.getPrototypeOf(value) === Object.prototype) {
    return Object.keys(value).length === len;
  }
  return value.length === len;
}

export default isLengthOf;