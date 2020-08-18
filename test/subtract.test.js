const { subtract } = require('../werkstatt');

test('subtract two numbers', () => {
    expect(subtract(6, 3)).toBe(3);
});