import isDefined from "../../other/isDefined";
import isNumber from "../isNumber";

/**
 * Converts a given number or float to fixed-point notation.
 *
 * @param {number} value The value to convert.
 * @param {number} precision Decimals of precision.
 * @returns {string} Representing a fixed-point number with desired precision.
 */

const toFixed = (value, precision) => {
  if (isDefined(value) && isNumber(value)) {
    return value.toFixed(precision);
  }

  return '0.0'
};

export default toFixed;
