const { isGreaterThan } = require('../../dist');

test('if the first passed argument greater than the second.', () => {
    expect(isGreaterThan(3, 5)).toEqual(false);
    expect(isGreaterThan(5, 5)).toEqual(false);
    expect(isGreaterThan(5, 1)).toEqual(true);
    expect(isGreaterThan("hola", 1)).toEqual(false);
    expect(isGreaterThan(undefined, 1)).toEqual(false);
    expect(isGreaterThan(null, 1)).toEqual(false);
});
