const { map, lengthOf } = require('../../dist');

test(
  'Returns a new array with the results of calling a provided function on every element of the passed array.',
  () => {
    const expected1 = [2, 4, 6];
    const numbers = [1, 2, 3];
    const mapped = map(numbers, (x) => x * 2);

    expect(lengthOf(mapped)).toBe(3);
    expect(mapped).toEqual(expect.arrayContaining(expected1));

    const people = [
      { name: 'Torey', birthdate: { day: 17, year: 1998 } },
      { name: 'PJ', birthdate: { day: 24, year: 1963 } },
    ];
    const expected2 = ['Torey', 'PJ'];
    const expected3 = [1998, 1963];

    const mappedNames = map(people, (element) => element.name);
    const mappedYears = map(people, (element) => element.birthdate.year);

    expect(lengthOf(mappedNames)).toBe(2);
    expect(mappedNames).toEqual(expect.arrayContaining(expected2));
    expect(lengthOf(mappedYears)).toBe(2);
    expect(mappedYears).toEqual(expect.arrayContaining(expected3));

    expect(map(null, (x) => x * 2)).toBe(null);
    expect(map(people, undefined)).toEqual(expect.arrayContaining(people));
  },
);

test(
  `
    Returns a new array with the results of calling a provided function on every element of the passed array, and
    returning the current iteration index as the second argument to the provided function.
    `,
  () => {
    const mapped = map([1, 2, 3], (x, index) => x * 2 + index);
    expect(lengthOf(mapped)).toBe(3);
    expect(mapped).toEqual(expect.arrayContaining([2, 5, 8]));

    const people = [
      { name: 'Torey', birthdate: { day: 17, year: 1998 } },
      { name: 'PJ', birthdate: { day: 24, year: 1963 } },
    ];

    const mappedNames = map(people, (element, index) => [element.name, index]);
    const mappedYears = map(people, (element, index) => [element.birthdate.year, index]);

    expect(lengthOf(mappedNames)).toBe(2);
    expect(mappedNames).toEqual(expect.arrayContaining([['Torey', 0], ['PJ', 1]]));
    expect(lengthOf(mappedYears)).toBe(2);
    expect(mappedYears).toEqual(expect.arrayContaining([[1998, 0], [1963, 1]]));

    expect(map(null, (x, index) => x * 2 + index)).toBe(null);
    expect(map(people, undefined)).toEqual(expect.arrayContaining(people));
  },
);
