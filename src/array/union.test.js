import union from './union';

describe('union', () => {
  it('should return an union between n amount of sets', () => {
    const unionResult = union([1, 2, 3], [2, 3, 4], [3, 4, 5]);
    expect(unionResult).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the only sets passed to the function', () => {
    const unionResult = union([1, 2, 3]);
    expect(unionResult).toEqual([1, 2, 3]);
  });

  it('should an empty array', () => {
    const unionResult = union([]);
    expect(unionResult).toEqual([]);
  });
});
