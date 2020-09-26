import isLengthOf from '../array/isLengthOf';

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