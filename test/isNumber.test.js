const { isNumber } = require('../dist');

test('if the passed argument is number', () => {
    expect(isNumber(3)).toEqual(true);
    expect(isNumber(398)).toEqual(true);
    expect(isNumber(398.34)).toEqual(true);
    expect(isNumber("38.34")).toEqual(true);
});

test('if the passed argument is not a number', () => {
  expect(isNumber([])).toEqual(false);
  expect(isNumber({})).toEqual(false);
  expect(isNumber("")).toEqual(false);
  expect(isNumber(true)).toEqual(false);
  expect(isNumber(new Date())).toEqual(false);
});