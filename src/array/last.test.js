const { last } = require('../../dist');

describe('last', () => {
  const array = ['a', 'b', 'c'];
  it('should return return last item in an array', () => {
    expect(last(array)).toBe('c');
  });
});
