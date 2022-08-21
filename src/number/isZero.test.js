const { isZero } = require('../../dist');

test('if the passed argument is not zero', () => {
    expect(isZero(3)).toEqual(false);
    expect(isZero([3])).toEqual(false);
    expect(isZero("3")).toEqual(false);
    expect(isZero(30)).toEqual(false);
    expect(isZero(undefined)).toEqual(false);
    expect(isZero(null)).toEqual(false);
    expect(isZero({})).toEqual(false);
});

test('if the passed argument is zero', () => {
  expect(isZero(0)).toEqual(true);
    expect(isZero(-0)).toEqual(true);
    expect(isZero(+0)).toEqual(true);
});
