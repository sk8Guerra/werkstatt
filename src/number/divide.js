import isNumber from "./isNumber";

/**
 * Divide two numbers.
 * 
 * Note: You can pass any amount of numbers, but only the first two will be divided.
 * Maybe in the future dividing n amount of numbers will be supported.
 *
 * @param {number[]} values n amount of numbers to divide.
 * @returns {number} The result of dividing two numbers.
 */

const divide = (...values) => {
  const [dividend, divider] = values;
  if (isNumber(dividend) && isNumber(divider)) {
    return Number(dividend) / Number(divider);
  }

  return 0;
}

export default divide;
