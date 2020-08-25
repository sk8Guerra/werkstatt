function areEqual(...values) {
  const [firstValue, secondValue] = values;
  return firstValue === secondValue;
}

module.exports = { areEqual };