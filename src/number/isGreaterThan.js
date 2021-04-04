
/**
 * Check whether the first argument is greater than the second.
 *
 * @param {number} firstValue The value to compare.
 * @param {number} secondValue The value to compare.
 * @returns {boolean} true: if the value first argument is greater than the second. false: if first argument is not greater than the second.
 */

const isGreaterThan = (...values) => {
  const [firstValue, secondValue] = values;
  return firstValue > secondValue
}

export default isGreaterThan;
