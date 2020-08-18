function isLengthOf(value, len) {
  if(Object.getPrototypeOf(value) === Object.prototype) {
    return Object.keys(value).length === len;
  }
  return value.length === len;
}

module.exports = { isLengthOf };