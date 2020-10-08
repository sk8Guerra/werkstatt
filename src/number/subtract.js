
/**
 * Subtract two numbers.
 * 
 * Note: You can pass any amount of numbers, but only the first two will be subtracted.
 * In the future subtracting n amount of numbers will be supported.
 *
 * @param {number[]} values n amount of numbers to subtract.
 * @returns {number} The result of subtracting two numbers.
 */

function subtract(...values) {
  const [a, b] = values;
  return a - b;
}

export default subtract;