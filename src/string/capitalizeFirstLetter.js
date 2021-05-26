import isString from './isString';

/**
 * Capitalize the first letter of a string.
 *
 * @param {string} string The string to capitalize (only the first letter).
 * @returns {string} The string with only the first letter capitalized.
 */

const capitalizeFirstLetter = (value) => {
  if (isString(value)) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return '';
};

export default capitalizeFirstLetter;
