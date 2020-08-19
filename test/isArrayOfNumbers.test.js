const { isArrayOfNumbers } = require('../werkstatt');

test('if the passed array is an array of numbers', () => {
    expect(isArrayOfNumbers([3, 6, 11, 'hola'])).toBe(false);
    expect(isArrayOfNumbers([3, true, 11, 'hola'])).toBe(false);
    expect(isArrayOfNumbers([1, 2, 3])).toBe(true);
    expect(isArrayOfNumbers([1, "2", 3])).toBe(true);
});