const { toString } = require('../../dist');

describe('toString', () => {
  it('should return the same string passed as argument', () => {
    expect(toString('hola')).toBe('hola');
  });

  it('should return the values passed as string', () => {
    expect(toString(null)).toBe('null');
    expect(toString(undefined)).toBe('undefined');
    expect(toString(123)).toBe('123');
    expect(toString({ greeting: 'hola' })).toBe('{"greeting":"hola"}');
    expect(toString(['hola', 'adios'])).toBe('["hola","adios"]');
  });
});
