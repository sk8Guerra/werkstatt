import toFixed from './fixed/toFixed';
import round from '../float/round';

/**
 * Returns a random numer between `lower` and `upper`.
 *
 * @param {number} lower The lower limit for calculating the random number.
 * @param {number} upper The highest limit for calculating the random number.
 * @returns {number} Random number.
 */

const random = (lower, upper, precision) => {
  const rndm = Math.random() * (upper - lower) + lower;
  if (precision) {
    return toFixed(rndm, precision);
  }
  return round(rndm);
};

export default random;
