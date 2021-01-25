const { map, lengthOf } = require('../../dist');

test(
  'Returns a new array populated with the results of calling a provided function on every element of the passed array.', 
  () => {
    const expected1 = [2, 4, 6];
    const numbers = [1, 2, 3];
    const mapped = map(numbers, x => x * 2);

    expect(lengthOf(mapped)).toBe(3);
    expect(mapped).toEqual(expect.arrayContaining(expected1));

    const people =  [
      { name: 'Torey', birthdate: { day: 17, year: 1998 } }, 
      { name: 'PJ', birthdate: { day: 24, year: 1963 } }
    ];
    const expected2 = ['Torey', 'PJ'];
    const expected3 = [1998, 1963];

    const mappedNames = map(people, element => element.name);
    const mappedYears = map(people, element => element.birthdate.year)

    expect(lengthOf(mappedNames)).toBe(2);
    expect(mappedNames).toEqual(expect.arrayContaining(expected2));
    expect(lengthOf(mappedYears)).toBe(2);
    expect(mappedYears).toEqual(expect.arrayContaining(expected3));
  }
);