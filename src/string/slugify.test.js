import slugify from './slugify';

describe('slugify', () => {
  const string = 'Hello World';
  const title = 'Verbos modales en ingles';
  it('should return a string split each whole word by a -', () => {
    expect(slugify(string)).toBe('hello-world');
    expect(slugify(title)).toBe('verbos-modales-en-ingles');
  });
});
