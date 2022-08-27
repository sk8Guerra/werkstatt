import isFloat from '../float/isFloat';
import isNumber from '../number/isNumber';
import TYPES from '../constants';

/**
 * Determines the data type of the passed argument.
 *
 * @param {any} value The value to check.
 * @returns {string} Describes the data type.
 */

function typeOf(value) {
  if (String(value) === TYPES.NULL && typeof (value) === TYPES.OBJECT) return TYPES.NULL;
  if (typeof (value) === TYPES.UNDEFINED) return TYPES.UNDEFINED;
  if (typeof (value) === TYPES.STRING) return TYPES.STRING;
  if (typeof (value) === TYPES.BOOLEAN) return TYPES.BOOLEAN;
  if (typeof (value) === TYPES.FUNCTION) return TYPES.FUNCTION;
  if (typeof (value) === TYPES.SYMBOL) return TYPES.SYMBOL;
  if (isNumber(value)) {
    if (isFloat(value)) return TYPES.FLOAT;
    return TYPES.NUMBER;
  }
  if (value instanceof Array && Array.isArray(value)) return TYPES.ARRAY;
  if (value instanceof Date) return TYPES.DATE;
  if (value instanceof Object) return TYPES.OBJECT;
  return typeof (value);
}

export default typeOf;
