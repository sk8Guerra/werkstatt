import orderAsc from './array/orderAsc';
import lengthOf from './array/lengthOf';

import isLengthOf from './array/isLengthOf';
import insertAt from './array/insertAt';
import isArrayOfNumbers from './array/isArrayOfNumbers';

import subtract from './number/subtract';
import isZero from './number/isZero'
import isOdd from './number/isOdd';
import isNumber from './number/isNumber';
import isEven from './number/isEven';
import isNegative from './number/isNegative';
import add from './number/add';
import divide from './number/divide';
import isGreaterThan from './number/isGreaterThan';

import roundUp from  './float/roundUp';
import roundDown from './float/roundDown';
import isFloat from './float/isFloat';

import capitalizeFirstLetter from './string/capitalizeFirstLetter';

import typeOf from './other/typeOf';
import areEqual from './other/areEqual';

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

const isUndefined = value => {
  return typeof(value) === 'undefined';
}

const isEmail = value => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase());
}

const isDefined = value => {
  if (areEqual(typeOf(value), 'undefined') || areEqual(typeOf(value), 'null')) return false;
  return true;
}

const has = (item, propOrValue) => {
  if (areEqual(typeOf(item), 'array')) {
    return item.includes(propOrValue);
  }
  if(areEqual(typeOf(item), 'object')) {
    return propOrValue in item;
  }
}

const isNull = value => {
  return areEqual(typeOf(value), 'null');
}

export {
  roundUp,
  roundDown,
  isEmpty,
  insertAt,
  isNumber,
  isNegative,
  isOdd,
  isEven,
  isZero,
  isUndefined,
  isEmail,
  orderAsc,
  lengthOf,
  isLengthOf,
  subtract,
  isFloat,
  typeOf,
  capitalizeFirstLetter,
  add,
  isArrayOfNumbers,
  divide,
  areEqual,
  isDefined,
  isGreaterThan,
  has,
  isNull
};