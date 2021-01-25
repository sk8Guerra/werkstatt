const { isFloat } = require('../../dist');

test('if the passed argument is float or not', () => {
    expect(isFloat(3)).toEqual(false);
    expect(isFloat(0.54)).toEqual(true);
    expect(isFloat(3.54)).toEqual(true);
});