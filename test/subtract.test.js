const { subtract } = require('../dist');

test('subtract two numbers', () => {
    expect(subtract(6, 3)).toBe(3);
});