const { orderAsc } = require("./src/array/orderAsc");
const { lengthOf } = require("./src/array/lengthOf");
const { isLengthOf } = require("./src/array/isLengthOf");
const { insertAt } = require("./src/array/insertAt");
const { isArrayOfNumbers } = require("./src/array/isArrayOfNumbers");

const { subtract } = require("./src/number/subtract");
const { isZero } = require('./src/number/isZero');
const { isEven } = require('./src/number/isEven');
const { isOdd } = require('./src/number/isOdd');
const { isNumber } = require('./src/number/isNumber');
const { isNegative } = require('./src/number/isNegative');
const { add } = require('./src/number/add');
const { divide } = require('./src/number/divide');

const { roundUp } = require('./src/float/roundUp');
const { roundDown } = require('./src/float/roundDown');
const { isFloat } = require('./src/float/isFloat');

const { capitalizeFirstLetter } = require('./src/string/capitalizeFirstLetter');

function isEmpty(param) {
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

function isUndefined(value) {
  return typeof(value) === 'undefined';
}

function isEmail(value) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase());
}

function typeOf(value) {
  if (String(value) === 'null') return 'null';
  if (typeof(value) === 'undefined') return 'undefined';
  if (typeof(value) === 'string') return 'string';
  if (typeof(value) === 'boolean') return 'boolean';
  if (typeof(value) === 'function') return 'function';
  if (typeof(value) === 'symbol') return 'symbol';
  if(typeof(value) === 'number') {
    if (isFloat(value)) return 'float'
    return 'number'
  }
  if (value instanceof Array) return 'array';
  if (value instanceof Object) return 'object';
  return typeof(value);
}

module.exports = {
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
  divide
};