const { every } = require('../../dist');

test('every value in the array matches a specific type', () => {
    expect(every('adios' === 'adios', 'hola' === 'hola').is.true).toBe(true);
    expect(every('adios', 'hola').is.string).toBe(true);
    expect(every(1, 2).is.number).toBe(true);
});

test('every value in the array does not match a specific type', () => {
    expect(every('adios' === 'adios', 'adios' === 'hola').is.true).toBe(false);
    expect(every('adios', {}).is.string).toBe(false);
    expect(every(1, "2").is.number).toBe(false);
});