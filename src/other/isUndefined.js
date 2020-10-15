
/**
 * Check whether the passed value is undefined or not.
 *
 * @param {any} value The value to check.
 * @returns {boolean} true: if the value is undefined. false: if the value is not undefined.
 */

const isUndefined = value => {
  return typeof(value) === 'undefined';
}

export default isUndefined;