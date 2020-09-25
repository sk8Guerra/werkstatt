import isArrayOfNumbers from '../array/isArrayOfNumbers';

function add(...values) {
  if (isArrayOfNumbers(values)) return values.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
};

export default add;
