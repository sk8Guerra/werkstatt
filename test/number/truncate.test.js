const { truncate } = require('../../dist');

test('Returns the integer part of a number by removing any fractional digits.', () => {
    expect(truncate(123.4567)).toBe(123);
    expect(truncate(undefined)).toBe(0);
    expect(truncate(null)).toBe(0);
});
