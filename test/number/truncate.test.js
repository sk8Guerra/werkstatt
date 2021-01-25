const { truncate } = require('../../dist');

test('Returns the integer part of a number by removing any fractional digits.', () => {
    const truncated = truncate(123.4567);
    expect(truncated).toBe(123);
});