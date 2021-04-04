
/**
 * Check whether the passed argument is number or not.
 *
 * @param {any} value The value to check.
 * @returns {boolean} true: if the value is number. false: if the value is not a number.
 */

const isNumber = (value) => {
  if (typeof value === 'number') {
    return value - value === 0;
  }
  if (typeof value === 'string' && value.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+value) : isFinite(+value);
  }
  return false;
};

export default isNumber;
