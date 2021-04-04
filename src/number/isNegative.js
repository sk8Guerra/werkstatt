
/**
 * Check whether the passed number is negative or not.
 *
 * @param {number} number The number to check.
 * @returns {boolean} true: if the number is a negative number. false: if the number is not a negative number.
 */

const isNegative = (number) => {
  return Math.sign(number) === -1;
}

export default isNegative;
