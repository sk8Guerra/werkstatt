const { intersection } = require('../../dist');

describe('intersection', () => {
  it('should return an intersection between 2 sets', () => {
    const intersectionResult = intersection([1, 2, 3], [2, 3, 4]);
    expect(intersectionResult).toEqual([2, 3]);
  });

  it('should return an intersection between more than 2 sets', () => {
    const intersectionResult = intersection([1, 2, 3], [2, 3, 4], [6, 3]);
    expect(intersectionResult).toEqual([3]);
  });

  it('should return the only set passed to the function', () => {
    const intersectionResult = intersection([1, 2, 3]);
    expect(intersectionResult).toEqual([1, 2, 3]);
  });

  it('should an empty array', () => {
    const intersectionResult = intersection([]);
    expect(intersectionResult).toEqual([]);
  });
});
