/**
 * Round up the number to next closest integer.
 *
 * @param {number} number The number to round up.
 * @returns {number} The number rounded up.
 */
import isNumber from "../number/isNumber";

function roundUp(value) {
  if (isNumber(value)) {
    return Math.ceil(value);
  }

  return 0;
}

export default roundUp;
