const areEqual = (...values) => {
  const firstValue = values[0];
  for(const value of values) {
    if (firstValue === value) continue;
    else return false;
  }
  return true;
};

export default areEqual;

