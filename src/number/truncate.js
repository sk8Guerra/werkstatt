
/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @param {number} value Value to be truncated.
 * @returns {number} The value truncated (only the integer part).
 */

const truncate = (value) => {
  return Math.trunc(value)
}

export default truncate;