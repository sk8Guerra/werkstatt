import isOdd from './isOdd';

/**
 * Check whether the passed number is an even number or not.
 *
 * @param {number} number The value to check.
 * @returns {boolean} true: if the value is an even number.
 *  false: if the value is not an even number.
 */

const isEven = (number) => !isOdd(number);

export default isEven;
