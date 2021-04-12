import isArray from "../array/isArray";

/**
 * Check if every passed argument is equal to each other.
 * 
 * @param {(number[]|string[]|boolean[])} values The values to check.
 * @returns {boolean} true: if every passed argument is equal to each other. false: if every passed argument is not equal to each other.
 */

const areEqual = (...values) => {
  const [firstValue] = values;

  if (isArray(firstValue)) {
    const [firstValueOfArray] = firstValue;
    for(const element of firstValue) {
      if (element === firstValueOfArray) continue;
      else return false;
    }
    return true;
  }

  for(const element of values) {
    if (element === firstValue) continue;
    else return false;
  }
  return true;
};

export default areEqual;

