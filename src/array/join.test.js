import join from './join';

describe('join', () => {
  const array = ['a', 'b', 'c'];
  it('should return an array joint by the simbol', () => {
    expect(join(array, '-')).toBe('a-b-c');
  });

  it('should return an array joint by any symbol', () => {
    expect(join(array)).toBe('abc');
  });
});
