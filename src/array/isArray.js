import typeOf from '../other/typeOf';
import areEqual from '../other/areEqual';

/**
 * Determines whether or not the value is an array.
 *
 * @param {any} value The value to check.
 * @returns {boolean} true: if the value is an array. false: if the value is not an array.
 */

const isArray = value => {
    return areEqual(typeOf(value), 'array');
};

export default isArray;