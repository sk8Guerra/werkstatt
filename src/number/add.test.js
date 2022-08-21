const { add } = require('../../dist');

test('add all the numbers passed as arguments', () => {
    expect(add(3, 6, "11")).toBe(20);

    const numbers = [1, 2, 3];
    expect(add(...numbers)).toBe(6);

    const numbers2 = [5, 4, 3, 2];
    expect(add(numbers2)).toBe(14);

    expect(add(5, 4, 3, 2)).toBe(14);
});
