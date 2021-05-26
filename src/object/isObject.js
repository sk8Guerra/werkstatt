import typeOf from '../other/typeOf';
import areEqual from '../other/areEqual';

/**
 * Check if the passed argument is an object.
 *
 * @param {any} value Value to ckeck.
 * @returns {boolean} true: if the value is an object. false: if the value is not an object.
 *
 */

const isObject = (obj) => areEqual(typeOf(obj), 'object');

export default isObject;
