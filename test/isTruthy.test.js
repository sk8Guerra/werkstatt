const { isTruthy } = require('../dist');

test('if the passed argument is truthy', () => {
    expect(isTruthy(3)).toEqual(true);
    expect(isTruthy([3])).toEqual(true);
    expect(isTruthy("3")).toEqual(true);
    expect(isTruthy(30)).toEqual(true);
    expect(isTruthy({})).toEqual(true);
    expect(isTruthy(new Date)).toEqual(true);
    expect(isTruthy(Symbol)).toEqual(true);
    expect(isTruthy(Number('hola'))).toEqual(false);
    expect(isTruthy(0)).toEqual(false);
    expect(isTruthy(-0)).toEqual(false);
    expect(isTruthy(null)).toEqual(false);
    expect(isTruthy(undefined)).toEqual(false);
    expect(isTruthy('')).toEqual(false);
    expect(isTruthy(false)).toEqual(false);
});