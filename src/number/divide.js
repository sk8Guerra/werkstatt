
/**
 * Divide two numbers.
 * 
 * Note: You can pass any amount of numbers, but only the first two will be divided.
 * Maybe in the future dividing n amount of numbers will be supported.
 *
 * @param {number[]} values n amount of numbers to divide.
 * @returns {number} The result of dividing two numbers.
 */

function divide(...values) {
  const [dividend, divider] = values;
  return dividend / divider;
}

export default divide;