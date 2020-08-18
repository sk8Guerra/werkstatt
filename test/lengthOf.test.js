const { lengthOf } = require('../werkstatt');

test('calculates the length of a list', () => {
    expect(lengthOf([3, 8, 9, 10, 5, "hola"])).toBe(6);
    expect(lengthOf([true, {number: 8}, 9, "adios", 5, "hola", 54, 3, 1, false])).toBe(10);
    expect(lengthOf({name: "Jorge", lasName: "Guerra"})).toBe(2);
    expect(lengthOf("Message")).toBe(7);
});