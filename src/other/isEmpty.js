import isLengthOf from '../array/isLengthOf';

/**
 * Check if the passed argument is empty.
 *
 * @param {any} param The param to check.
 * @returns {boolean} true: if the value is empty. false: if the value is not empty. 
 */

const isEmpty = param => {
  if (typeof(param) === 'string') {
    return isLengthOf(param.trim(), 0);
  }
  if(Object.getPrototypeOf(param) === Object.prototype) {
    return isLengthOf(Object.keys(param), 0);
  }
  if (Object.getPrototypeOf(param) === Array.prototype) {
    return isLengthOf(param, 0);
  }
  return true;
}

export default isEmpty;