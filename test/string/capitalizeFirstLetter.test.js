const { capitalizeFirstLetter } = require('../../dist');

test('if the passed argument is undefined', () => {
    expect(capitalizeFirstLetter('hola')).toEqual('Hola');
    expect(capitalizeFirstLetter('adios')).toEqual('Adios');

    expect(capitalizeFirstLetter(undefined)).toEqual('');
    expect(capitalizeFirstLetter(null)).toEqual('');
    expect(capitalizeFirstLetter([])).toEqual('');
    expect(capitalizeFirstLetter({})).toEqual('');
    expect(capitalizeFirstLetter(3)).toEqual('');
    expect(capitalizeFirstLetter(true)).toEqual('');
});
