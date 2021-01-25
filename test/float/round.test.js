const { round } = require('../../dist');

test('Rounds the number to the nearest integer.', () => {
  expect(round(3.14)).toBe(3);
  expect(round(5.95)).toBe(6);
  expect(round(5.5)).toBe(6);
  expect(round(5.05)).toBe(5);
});