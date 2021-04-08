const { isArray } = require('../../dist');

test('if the passed argument is an array', () => {
    expect(isArray(['hola'])).toEqual(true);
    expect(isArray([3])).toEqual(true);
});

test('if the passed argument is not a string', () => {
  expect(isArray({ hola: [] })).toEqual(false);
  expect(isArray(10)).toEqual(false);
    expect(isArray(undefined)).toEqual(false);
    expect(isArray(false)).toEqual(false);
    expect(isArray(null)).toEqual(false);
});
