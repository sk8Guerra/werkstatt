const { toFixed } = require('../../../dist');

test('Converts a given number or float to fixed-point notation.', () => {
  expect(toFixed(3.14, 4)).toBe('3.1400');
  expect(toFixed(5.95, 1)).toBe('6.0');
  expect(toFixed(5.5, 2)).toBe('5.50');
  expect(toFixed(5.1346, 3)).toBe('5.135');
  expect(toFixed(5.1346, 4)).toBe('5.1346');
  expect(toFixed(undefined, 4)).toBe('0.0');
  expect(toFixed(null, 4)).toBe('0.0');
  expect(toFixed({}, 4)).toBe('0.0');
});
