const { roundDown } = require('../../dist');

test('orders an array in ASCENDING mode.', () => {
    expect(roundDown(3.14)).toBe(3);
    expect(roundDown(7.688888889)).toBe(7);
});