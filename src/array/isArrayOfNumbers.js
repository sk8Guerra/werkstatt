import isNumber from '../number/isNumber';

/**
 * Check whether every element in the array is number type or not.
 *
 * @param {Array} array Array to check.
 * @returns {boolean} true: if every element in the array is number. false: if any element in the array is not number.
 */

const isArrayOfNumbers = (array) => {
  for (let number = 0; number < array.length; number++) {
    if (isNumber(array[number])) continue;
    return false;
  }
  return true;
}

export default isArrayOfNumbers;
