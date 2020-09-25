const { isUndefined } = require('../dist');

test('if the passed argument is undefined', () => {
    expect(isUndefined(3)).toEqual(false);
    expect(isUndefined(3)).toEqual(false);
    expect(isUndefined("Lorem ipsum")).toEqual(false);
    expect(isUndefined()).toEqual(true);
    expect(isUndefined(undefined)).toEqual(true);
});