const { isNegative } = require('../../dist');

test('if the passed argument is not a negative number', () => {
    expect(isNegative(3)).toEqual(false);
    expect(isNegative(undefined)).toEqual(false);
    expect(isNegative({})).toEqual(false);
    expect(isNegative(null)).toEqual(false);
    expect(isNegative("null")).toEqual(false);
});

test('if the passed argument is a negative number', () => {
  expect(isNegative(-3)).toEqual(true);
});
