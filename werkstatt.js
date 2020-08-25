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
const { isGreaterThan } = require('./src/number/isGreaterThan');

const { roundUp } = require('./src/float/roundUp');
const { roundDown } = require('./src/float/roundDown');
const { isFloat } = require('./src/float/isFloat');

const { capitalizeFirstLetter } = require('./src/string/capitalizeFirstLetter');

const { typeOf } = require('./src/other/typeOf');
const { areEqual } = require('./src/other/areEqual');

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

function isDefined(value) {
  if (areEqual(typeOf(value), 'undefined') || areEqual(typeOf(value), 'null')) return false;
  return true;
}

function has(item, propOrValue) {
  if (areEqual(typeOf(item), 'array')) {
    return item.includes(propOrValue);
  }
  if(areEqual(typeOf(item), 'object')) {
    return propOrValue in item;
  }
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
  divide,
  areEqual,
  isDefined,
  isGreaterThan,
  has
};