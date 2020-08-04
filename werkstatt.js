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

module.exports = {
  roundUp,
  roundDown,
  isEmpty
};