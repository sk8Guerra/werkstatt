import isNumber from "./isNumber";

/**
 * Subtract two numbers.
 * 
 * NOTE: You can pass any amount of numbers, but only the first two will be subtracted.
 * In the future subtracting n amount of numbers will be supported.
 *
 * @param {number[]} values n amount of numbers to subtract.
 * @returns {number} The result of subtracting two numbers.
 */

const subtract = (...values) => {
  const [a, b] = values;
  if (isNumber(a) && isNumber(b)) {
    return Number(a) - Number(b);
  }

  return 0;
}

export default subtract;
