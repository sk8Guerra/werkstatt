const { roundUp } = require('../../dist');

test('Rounds up a number to the closest integer.', () => {
    expect(roundUp(3.14)).toBe(4);
    expect(roundUp(7.688888889)).toBe(8);
    expect(roundUp([])).toBe(0);
    expect(roundUp({})).toBe(0);
    expect(roundUp(NaN)).toBe(0);
    expect(roundUp(undefined)).toBe(0);
    expect(roundUp(null)).toBe(0);
    expect(roundUp("null")).toBe(0);
});
