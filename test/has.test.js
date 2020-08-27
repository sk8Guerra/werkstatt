const { has } = require('../werkstatt');

test('if the second argument exists either as value in an array or as prop in a json', () => {
    expect(has([3, 5], 3)).toEqual(true);
    expect(has(["Hola", "adios"], "true")).toEqual(false);
    expect(has({ name: "Jorge" }, "name")).toEqual(true);
});