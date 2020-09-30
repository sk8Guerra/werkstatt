const { isFalsy } = require('../dist');

test('if the passed argument is falsy', () => {
    expect(isFalsy(3)).toEqual(false);
    expect(isFalsy([3])).toEqual(false);
    expect(isFalsy("3")).toEqual(false);
    expect(isFalsy(30)).toEqual(false);
    expect(isFalsy({})).toEqual(false);
    expect(isFalsy(new Date)).toEqual(false);
    expect(isFalsy(Symbol)).toEqual(false);
    expect(isFalsy(Number('hola'))).toEqual(true);
    expect(isFalsy(0)).toEqual(true);
    expect(isFalsy(-0)).toEqual(true);
    expect(isFalsy(null)).toEqual(true);
    expect(isFalsy(undefined)).toEqual(true);
    expect(isFalsy('')).toEqual(true);
    expect(isFalsy(false)).toEqual(true);
});