const { has } = require('../../dist');

test('if the second argument exists either: 1. as value in an array; 2. as prop in a json; 3. char in a string', () => {
    expect(has([3, 5], 3)).toEqual(true);
    expect(has(["Hola", "adios"], "true")).toEqual(false);
    expect(has({ name: "Jorge" }, "name")).toEqual(true);
    expect(has("Jorge", "e")).toEqual(true);

    expect(has("Jorge", undefined)).toEqual(false);
    expect(has(["Hola", "adios"], undefined)).toEqual(false);
    expect(has({ name: "Jorge" }, undefined)).toEqual(false);
    expect(has(null, 'e')).toEqual(false);
    expect(has(undefined, 'e')).toEqual(false);
});
