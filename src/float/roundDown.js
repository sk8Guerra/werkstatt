import isNumber from '../number/isNumber';

/**
 * Round down the number to the previous integer.
 *
 * @param {number} number The number to round down.
 * @returns {number} The number rounded down.
 */

const roundDown = (value) => {
  if (isNumber(value)) {
    return Math.floor(value);
  }

  return 0;
};

export default roundDown;
