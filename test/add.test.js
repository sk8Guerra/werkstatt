const { add } = require('../werkstatt');

test('add all the numbers passed as arguments', () => {
    expect(add(3, 6, 11)).toBe(20);
    const numbers = [1, 2, 3];
    expect(add(...numbers)).toBe(6);
});