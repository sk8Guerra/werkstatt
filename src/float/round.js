import isNumber from "../number/isNumber";

/**
 * Rounds the number to the nearest integer.
 *
 * @param {number} number The number to round.
 * @returns {number} The number rounded.
 */

const round = (value) => {
    if (isNumber(value)) {
        return Math.round(value);
    }

    return 0;
}
  
export default round;
