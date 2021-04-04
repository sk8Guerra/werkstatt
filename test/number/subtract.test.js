const { subtract } = require('../../dist');

test('subtract two numbers', () => {
    expect(subtract(6, 3)).toBe(3);
    expect(subtract({}, 3)).toBe(0);
    expect(subtract(false, 3)).toBe(0);
    expect(subtract(undefined, 3)).toBe(0);
});
