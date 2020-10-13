
/**
 * Capitalize the first letter of a string.
 *
 * @param {string} string The string to capitalize (only the first letter).
 * @returns {string} The string with only the first letter capitalized.
 */

function capitalizeFirstLetter(string) {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalizeFirstLetter;
