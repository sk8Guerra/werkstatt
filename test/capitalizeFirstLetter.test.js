const { capitalizeFirstLetter } = require('../werkstatt');

test('if the passed argument is undefined', () => {
    expect(capitalizeFirstLetter('hola')).toEqual('Hola');
    expect(capitalizeFirstLetter('adios')).toEqual('Adios');
});