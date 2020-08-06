const { isZero } = require('../werkstatt');

test('if the passed argument is not zero', () => {
    expect(isZero(3)).toEqual(false);
    expect(isZero([3])).toEqual(false);
    expect(isZero("3")).toEqual(false);
    expect(isZero(30)).toEqual(false);
});

test('if the passed argument is zero', () => {
  expect(isZero(0)).toEqual(true);
});