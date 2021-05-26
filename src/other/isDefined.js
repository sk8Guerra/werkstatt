import areEqual from './areEqual';
import typeOf from './typeOf';

/**
 * Check whether the passed value is defined or not.
 *
 * @param {any} value The value to check.
 * @returns {boolean} true: if the value is defined. false: if the value is not defined.
 */

const isDefined = (value) => {
  if (areEqual(typeOf(value), 'undefined') || areEqual(typeOf(value), 'null')) return false;
  return true;
};

export default isDefined;
