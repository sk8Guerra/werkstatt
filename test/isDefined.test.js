const { isDefined } = require('../werkstatt');

test('if the passed argument is defined', () => {
    expect(isDefined(3)).toEqual(true);
    expect(isDefined({})).toEqual(true);
});

test('if the passed argument is not defined', () => {
  var name;
  expect(isDefined(name)).toEqual(false);

  var age = null;
  expect(isDefined(age)).toEqual(false);
});