import typeOf from '../other/typeOf';

/**
 * Determines whether or not the value is a string.
 *
 * @param {any} value The value to check.
 * @returns {boolean} true: if the value is a string. false: if the value is not a string.
 */

const isString = (value) => typeOf(value) === 'string';

export default isString;
