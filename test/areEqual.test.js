const { areEqual, typeOf } = require('../dist');

test('if the passed arguments are equal', () => {
    expect(areEqual(3, 3)).toEqual(true);
    var name;
    expect(areEqual(typeOf(name), 'undefined')).toEqual(true);
    expect(areEqual(true, true)).toEqual(true);
});

test('if the passed arguments are not equal', () => {
  expect(areEqual(100, 2)).toEqual(false);
  var name;
  expect(areEqual(typeOf(name), 'undined')).toEqual(false);
  expect(areEqual(true, false)).toEqual(false);
});