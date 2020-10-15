
/**
 * Check if every passed argument is equal to each other.
 * 
 * @param {(number[]|string[]|boolean[])} values The values to check.
 * @returns {boolean} true: if every passed argument is equal to each other. false: if every passed argument is not equal to each other.
 */

const areEqual = (...values) => {
  const firstValue = values[0];
  for(const value of values) {
    if (firstValue === value) continue;
    else return false;
  }
  return true;
};

export default areEqual;

