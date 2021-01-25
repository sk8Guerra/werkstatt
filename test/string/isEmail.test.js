const { isEmail } = require('../../dist');

test('if the passed argument is undefined', () => {
    expect(isEmail(3)).toEqual(false);
    expect(isEmail(3)).toEqual(false);
    expect(isEmail("@lo.com")).toEqual(false);
    expect(isEmail("a@a.c")).toEqual(false);
    expect(isEmail("a@a.co")).toEqual(true);
    expect(isEmail("alo.le.@gmail.com")).toEqual(false);
    expect(isEmail("alo")).toEqual(false);
    expect(isEmail("alo.le.@gmailcom")).toEqual(false);
    expect(isEmail("alo.le.gmailcom")).toEqual(false);
    expect(isEmail("205820@lol_lol.com")).toEqual(false);
});