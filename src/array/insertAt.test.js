const { insertAt, lengthOf } = require('../../dist');

test('if the passed argument is an array', () => {
    const myName = ['Jorge', 'Guerra', 'Solorzano'];

    const fullName = insertAt(myName, 1, 'Roberto');
    const expectedArray = ['Jorge', 'Roberto', 'Guerra', 'Solorzano']

    expect(lengthOf(fullName)).toBe(4);
    expect(fullName.indexOf('Roberto')).toBe(1);
    expect(fullName).toEqual(expect.arrayContaining(expectedArray));

    const fullName2 = insertAt({}, 1, 'Roberto');
    const fullName3 = insertAt(fullName, null, 'Roberto');

    expect(fullName2).toEqual({});
    expect(fullName3).toEqual(expect.arrayContaining(myName));
});
