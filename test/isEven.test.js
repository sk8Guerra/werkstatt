const { isEven } = require('../werkstatt');

test('if the passed argument is not an even number', () => {
    expect(isEven(3)).toEqual(false);
});

test('if the passed argument is not even number', () => {
  expect(isEven(500)).toEqual(true);
});