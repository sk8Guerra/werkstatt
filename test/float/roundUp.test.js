const { roundUp } = require('../../dist');

test('orders an array in ASCENDING mode.', () => {
    expect(roundUp(3.14)).toBe(4);
    expect(roundUp(7.688888889)).toBe(8);
});