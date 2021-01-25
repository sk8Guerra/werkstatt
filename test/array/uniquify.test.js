const { uniquify, lengthOf } = require('../../dist');

test('Makes every object in an array unique.', () => {
    
    const shoes = [
        { id: 1, name: "nikesb" },
        { id: 1, name: "nikesb" },
        { id: 2, name: "lakai" },
        { id: 2, name: "lakai" },
        { id: 3, name: "etnies" },
    ];

    expect(lengthOf(uniquify(shoes, (a,b) => a.id === b.id))).toBe(3);
    expect(uniquify(shoes, (a,b) => a.id === b.id)).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ id: 1, name: "nikesb" }),
            expect.objectContaining({ id: 2, name: "lakai" }),
            expect.objectContaining({ id: 3, name: "etnies" })
        ])
    );

    const people =  [
        { id: 1, name: 'Torey', birthdate: { day: 17, year: 1998 } },
        { id: 1, name: 'Torey', birthdate: { day: 17, year: 1998 } },
        { id: 2, name: 'PJ', birthdate: { day: 24, year: 1964 } },
        { id: 2, name: 'PJ', birthdate: { day: 24, year: 1964 } },
        { id: 3, name: 'Felipe', birthdate: { day: 21, year: 1961 } },
        { id: 4, name: 'Luan', birthdate: { day: 23, year: 1963 } },
        { id: 4, name: 'Luan', birthdate: { day: 23, year: 1963 } },
      ];
  
    const expected =  [
        { id: 1, name: 'Torey', birthdate: { day: 17, year: 1998 } },
        { id: 2, name: 'PJ', birthdate: { day: 24, year: 1964 } },
        { id: 3, name: 'Felipe', birthdate: { day: 21, year: 1961 } },
        { id: 4, name: 'Luan', birthdate: { day: 23, year: 1963 } },
    ];
    
    expect(lengthOf(uniquify(people, (a,b) => a.id === b.id))).toBe(4);
    expect(uniquify(people, (a, b) => a.id === b.id)).toEqual(expect.arrayContaining(expected));

    const fruit = ['banano', 'fresa', 'fresa', 'mango', 'melocoton', 'kiwi', 'kiwi'];
    const expected2 = ['banano', 'fresa', 'mango', 'melocoton', 'kiwi'];

    expect(lengthOf(uniquify(fruit, (a, b) => a === b))).toBe(5);
    expect(uniquify(fruit, (a, b) => a === b)).toEqual(expect.arrayContaining(expected2));
});