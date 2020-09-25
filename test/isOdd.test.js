const { isOdd } = require('../dist');

test('if the passed argument is an odd number', () => {
    expect(isOdd(3)).toEqual(true);
});

test('if the passed argument is not an odd number', () => {
  expect(isOdd(10)).toEqual(false);
  expect(isOdd([10])).toEqual(false);
});