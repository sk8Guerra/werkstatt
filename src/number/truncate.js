import isDefined from "../other/isDefined";
import isNumber from "./isNumber";

/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @param {number} value Value to be truncated.
 * @returns {number} The value truncated (only the integer part).
 */

const truncate = (value) => {
  if(isDefined(value) && isNumber(value)) {
    return Math.trunc(value) ;
  }

  return 0;
}

export default truncate;
