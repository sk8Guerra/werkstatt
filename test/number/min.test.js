const { min } = require('../../dist');

test('Returns the lowest-valued number passed into it. (many args)', () => {
  const minNumber = min(264, 736, 223, 979, 124);
  expect(minNumber).toBe(124);
});

test('Returns the lowest-valued number passed into it. (array)', () => {
  const minNumber2 = min([543, 333, 22, 1865, 976]);
  expect(minNumber2).toBe(22);
});