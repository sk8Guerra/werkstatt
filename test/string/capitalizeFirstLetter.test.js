const { capitalizeFirstLetter } = require('../../dist');

describe('capitalizes the first letter:', () => {
    test('capitalized', () => {
        expect(capitalizeFirstLetter('hola')).toEqual('Hola');
        expect(capitalizeFirstLetter('adios')).toEqual('Adios');
    });

    test('not capitalized', () => {
        expect(capitalizeFirstLetter(undefined)).toEqual('');
        expect(capitalizeFirstLetter(null)).toEqual('');
        expect(capitalizeFirstLetter([])).toEqual('');
        expect(capitalizeFirstLetter({})).toEqual('');
        expect(capitalizeFirstLetter(3)).toEqual('');
        expect(capitalizeFirstLetter(true)).toEqual('');
    });
});
