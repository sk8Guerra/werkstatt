const { isGreaterThan } = require('../../dist');

test('if the first passed argument greater than the second.', () => {
    expect(isGreaterThan(3, 5)).toEqual(false);
    expect(isGreaterThan(5, 5)).toEqual(false);
    expect(isGreaterThan(5, 1)).toEqual(true);
});