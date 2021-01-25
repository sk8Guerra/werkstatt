const { areEqual, typeOf } = require('../../dist');

test('if the passed arguments are equal', () => {
    const numbers = [3, 3, 3, 3, 3];
    expect(areEqual(...numbers)).toEqual(true);
    var name;
    expect(areEqual(typeOf(name), 'undefined')).toEqual(true);
    expect(areEqual(true, true)).toEqual(true);
});

test('if the passed arguments are not equal', () => {
  expect(areEqual(100, 2)).toEqual(false);
  var name;
  expect(areEqual(typeOf(name), 'undined')).toEqual(false);
  const saludos = ['hola', 'hallo'];
  expect(areEqual(...saludos)).toEqual(false);
  expect(areEqual(true, false)).toEqual(false);
});