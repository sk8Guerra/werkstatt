const { isLengthOf } = require('../werkstatt');

test('calculates the length of a list', () => {
    expect(isLengthOf([3, 8, 9, 10, 5, "hola"], 6)).toBe(true);
    expect(isLengthOf([true, {number: 8}, 9, "adios", 5, "hola", 54, 3, 1, false], 0)).toBe(false);
    expect(isLengthOf({name: "Jorge", lasName: "Guerra"}, 2)).toBe(true);
    expect(isLengthOf("", 0)).toBe(true);
});