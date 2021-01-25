
/**
 * Converts a given number or float to fixed-point notation.
 *
 * @param {number} value The value to convert.
 * @param {number} precision Decimals of precision.
 * @returns {string} Representing a fixed-point number with desired precision.
 */

const toFixed = (value, precision) => {
  return value.toFixed(precision);
};

export default toFixed;