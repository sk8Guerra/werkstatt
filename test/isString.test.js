const { isString } = require('../dist');

test('if the passed argument is a string', () => {
    expect(isString('hola')).toEqual(true);
    expect(isString('3')).toEqual(true);
});

test('if the passed argument is not a string', () => {
  expect(isString(10)).toEqual(false);
  expect(isString([10])).toEqual(false);
});