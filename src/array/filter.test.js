const { filter } = require('../../dist');

test(
  'Returns a new array with the results of calling a provided function on every element of the passed array.',
  () => {
    const numbers = [1, 2, 3];
    const filtered = filter(numbers, (x) => x === 2);
    expect(filtered).toEqual(expect.arrayContaining([2]));

    const people = [
      { name: 'Torey', birthdate: { day: 17, year: 1998 }, stance: 'regular' },
      { name: 'PJ', birthdate: { day: 24, year: 1963 }, stance: 'goofy' },
      { name: 'Paul', birthdate: { day: 24, year: 1963 }, stance: 'goofy' },
    ];
    const peopleFiltered = filter(people, (x) => x.stance === 'goofy');
    const peopleFiltered2 = filter(people, (x) => x.birthdate.day === 17);
    const peopleFiltered3 = filter(people, (x) => x.favoriteColor === 'red');
    const peopleFiltered4 = filter(people, (x) => x.favorite.color === 'red');

    expect(peopleFiltered).toEqual(expect.arrayContaining(
      [
        { name: 'PJ', birthdate: { day: 24, year: 1963 }, stance: 'goofy' },
        { name: 'Paul', birthdate: { day: 24, year: 1963 }, stance: 'goofy' },
      ],
    ));
    expect(peopleFiltered2).toEqual(expect.arrayContaining(
      [
        { name: 'Torey', birthdate: { day: 17, year: 1998 }, stance: 'regular' },
      ],
    ));
    expect(peopleFiltered3).toEqual(expect.arrayContaining(
      [],
    ));
    expect(peopleFiltered4).toEqual(expect.arrayContaining(
      [],
    ));
  },
);
