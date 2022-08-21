const { divide } = require('../../dist');

test('divide one number into another', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(100, 2)).toBe(50);
    expect(divide(8, 2)).toBe(4);

    expect(divide(0, 0)).toBe(NaN);
    expect(divide(1, 0)).toBe(Infinity);
    expect(divide(0, 5)).toBe(0);
    expect(divide([], 5)).toBe(0);
});
