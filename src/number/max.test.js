const { max } = require('../../dist');

test('Returns the largest value from a list of numbers. (many args)', () => {
  const maxNumber = max(264, 736, 223, 979, 124);
  expect(maxNumber).toBe(979);
});

test('Returns the largest value from a list of numbers. (array)', () => {
  const maxNumber2 = max([543, 333, 22, 1865, 976]);
  expect(maxNumber2).toBe(1865);
});