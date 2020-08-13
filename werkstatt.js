function roundUp(number) {
  return Math.ceil(number);
}

function roundDown(number) {
  return Math.floor(number);
}

function isEmpty(param) {
  if (typeof(param) === 'string') {
    return param.trim().length === 0;
  }
  if(Object.getPrototypeOf(param) === Object.prototype) {
    return Object.keys(param).length === 0;
  }
  if (Object.getPrototypeOf(param) === Array.prototype) {
    return param.length === 0;
  }
  return true;
}

function insertAt(array, index, elementToInsert) {
  var newArray = [...array];
  newArray.splice(index, 0, elementToInsert);
  return newArray;
};

function isNumber (value) {
  if (typeof value === 'number') {
    return value - value === 0;
  }
  if (typeof value === 'string' && value.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+value) : isFinite(+value);
  }
  return false;
};

function isNegative(value) {
  return Math.sign(value) === -1;
}

function isOdd(value) {
  const n = Math.abs(value);
  if (!isNumber(n)) {
    throw new TypeError('expected a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('expected an integer');
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error('value exceeds maximum safe integer');
  }
  return (n % 2) === 1;
};

function isEven(value) {
  return !isOdd(value);
};

function isZero (number) {
  return number === 0;
};

function isUndefined(value) {
  return typeof(value) === 'undefined';
}

function isEmail(value) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase());
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
  isEmail
};