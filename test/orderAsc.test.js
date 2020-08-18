const { orderAsc } = require('../werkstatt');

test('orders an array in ASCENDING mode.', () => {
    expect(orderAsc([5, 3, 2, 8, 10])).toEqual([2, 3, 5, 8, 10]);
});
