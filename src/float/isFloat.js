import isNumber from '../number/isNumber';

/**
 * Check whether the passed argument is a float number or not.
 *
 * @param {any} value The value to check.
 * @returns {boolean} true: if the value is a float number.
 *  false: if the value is not a float number.
 */
const isFloat = (value) => {
  if (isNumber(value)) {
    return value % 1 !== 0;
  }

  return false;
};

export default isFloat;
