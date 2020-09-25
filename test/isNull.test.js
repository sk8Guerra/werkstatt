const { isNull } = require('../werkstatt');

test('if the passed arguments is null', () => {
    expect(isNull(null)).toEqual(true);
    var name = null;
    expect(isNull(name)).toEqual(true);
    expect(isNull("")).toEqual(false);
    var lastName;
    expect(isNull(lastName)).toEqual(false);
    expect(isNull(3)).toEqual(false);
    expect(isNull(["hola"])).toEqual(false);
    expect(isNull({})).toEqual(false);
    expect(isNull(new Date)).toEqual(false);
});