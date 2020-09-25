function insertAt(array, index, elementToInsert) {
  var newArray = [...array];
  newArray.splice(index, 0, elementToInsert);
  return newArray;
};

export default insertAt