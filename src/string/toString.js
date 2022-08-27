import typeOf from '../other/typeOf';
import areEqual from '../other/areEqual';
import isObject from '../object/isObject';
import isArray from '../array/isArray';
import TYPES from '../constants';

const toString = (value) => {
  if (areEqual(typeOf(value), TYPES.STRING)) {
    return value;
  }

  if (areEqual(typeOf(value), TYPES.DATE)) {
    return String(value);
  }

  if (isObject(value) || isArray(value)) {
    return JSON.stringify(value);
  }

  return String(value);
};

export default toString;
