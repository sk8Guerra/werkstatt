const { isEmpty } = require('../werkstatt');

test('if the passed argument is undefined', () => {
    expect(isEmpty({})).toEqual(true);
    expect(isEmpty([])).toEqual(true);
});