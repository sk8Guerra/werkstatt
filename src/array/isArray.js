/**
 * Determines whether or not the value is an array.
 *
 * @param {any} value The value to check.
 * @returns {boolean} true: if the value is an array. false: if the value is not an array.
 */

const isArray = (value) => {
  if (value instanceof Array && Array.isArray(value)) return true;
  return false;
};

export default isArray;
