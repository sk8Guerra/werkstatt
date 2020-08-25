const { isFloat } = require('../float/isFloat');

function typeOf(value) {
  if (String(value) === 'null' && typeof(value) === 'object') return 'null';
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

module.exports = { typeOf };