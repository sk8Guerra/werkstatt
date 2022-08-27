import isZero from './number/isZero';
import add from './number/add';
import subtract from './number/subtract';
import divide from './number/divide';
import isNumber from './number/isNumber';
import isOdd from './number/isOdd';
import isEven from './number/isEven';
import isNegative from './number/isNegative';
import isGreaterThan from './number/isGreaterThan';
import min from './number/min';
import max from './number/max';
import toFixed from './number/fixed/toFixed';
import truncate from './number/truncate';
import random from './number/random';

import roundUp from './float/roundUp';
import roundDown from './float/roundDown';
import round from './float/round';
import isFloat from './float/isFloat';

import capitalizeFirstLetter from './string/capitalizeFirstLetter';
import isEmail from './string/isEmail';
import isString from './string/isString';
import slugify from './string/slugify';
import toString from './string/toString';

import isTruthy from './boolean/isTruthy';
import isFalsy from './boolean/isFalsy';

import orderAsc from './array/orderAsc';
import lengthOf from './array/lengthOf';
import isLengthOf from './array/isLengthOf';
import insertAt from './array/insertAt';
import isArrayOfNumbers from './array/isArrayOfNumbers';
import toArray from './array/toArray';
import isArray from './array/isArray';
import uniquify from './array/uniquify';
import map from './array/map';
import intersection from './array/intersection';
import join from './array/join';
import last from './array/last';
import union from './array/union';

import typeOf from './other/typeOf';
import areEqual from './other/areEqual';
import isUndefined from './other/isUndefined';
import isDefined from './other/isDefined';
import isEmpty from './other/isEmpty';
import has from './other/has';
import isNull from './other/isNull';
import every from './other/every';
import compose from './other/compose';
import removeFrom from './other/removeFrom';
import is from './other/is';

import mergeDeep from './object/mergeDeep';
import isObject from './object/isObject';

export {
  isZero,
  add,
  subtract,
  divide,
  isNumber,
  isOdd,
  isEven,
  isNegative,
  isGreaterThan,
  min,
  max,
  toFixed,
  truncate,
  random,

  round,
  roundUp,
  roundDown,
  isFloat,

  capitalizeFirstLetter,
  isEmail,
  isString,
  slugify,
  toString,

  isTruthy,
  isFalsy,

  orderAsc,
  lengthOf,
  isLengthOf,
  insertAt,
  isArrayOfNumbers,
  toArray,
  isArray,
  uniquify,
  map,
  intersection,
  union,
  last,
  join,

  typeOf,
  areEqual,
  isUndefined,
  isDefined,
  isEmpty,
  has,
  isNull,
  every,
  compose,
  removeFrom,
  is,

  mergeDeep,
  isObject,
};
