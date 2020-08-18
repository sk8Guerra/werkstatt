function insertAt(array, index, elementToInsert) {
  var newArray = [...array];
  newArray.splice(index, 0, elementToInsert);
  return newArray;
};

module.exports = { insertAt };