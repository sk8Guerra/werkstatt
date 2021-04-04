import isNumber from './isNumber';

/**
 * Check whether the passed number is an odd number or not.
 *
 * @param {number} number The number to check.
 * @returns {boolean} true: if the number is an odd number. false: if the number is not an odd number.
 */

const isOdd = (number) => {
  const n = Math.abs(number);
  if (!isNumber(n)) {
    throw new TypeError('expected a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('expected an integer');
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error('number exceeds maximum safe integer');
  }
  return (n % 2) === 1;
};

export default isOdd;
