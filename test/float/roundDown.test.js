const { roundDown } = require('../../dist');

test('Rounds down a number to the closest integer.', () => {
    expect(roundDown(3.14)).toBe(3);
    expect(roundDown(7.688888889)).toBe(7);

    expect(roundDown([])).toBe(0);
    expect(roundDown({})).toBe(0);
    expect(roundDown(NaN)).toBe(0);
    expect(roundDown(undefined)).toBe(0);
    expect(roundDown(null)).toBe(0);
    expect(roundDown("null")).toBe(0);
});
