function lengthOf(value) {
  if(Object.getPrototypeOf(value) === Object.prototype) {
    return Object.keys(value).length;
  }
  return value.length;
}

export default lengthOf;