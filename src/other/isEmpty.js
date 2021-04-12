import isLengthOf from '../array/isLengthOf';
import isUndefined from './isUndefined';
import isNull from "./isNull";

/**
 * Check whether the passed value is empty or not.
 *
 * @param {any} value The value to check.
 * @returns {boolean} true: if the value is empty. false: if the value is not empty. 
 */

const isEmpty = param => {
  if(isUndefined(param) || isNull(param)) return true;

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
