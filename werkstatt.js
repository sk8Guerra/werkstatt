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

console.log(insertAt([1, 2, 3], 1, 4));

module.exports = {
  roundUp,
  roundDown,
  isEmpty,
  insertAt
};