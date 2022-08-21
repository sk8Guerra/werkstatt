const { mergeDeep } = require('../../dist');

test('Performs a deep merge of objects and returns a new object.', () => {
  
  const obj1 = {
    a: 1,
    b: 1, 
    c: { x: 1, y: 1 },
    d: [ 1, 1 ]
  }

  const obj2 = {
    b: 2, 
    c: { y: 2, z: 2 },
    d: [ 2, 2 ],
    e: 2
  }

  const obj3 = mergeDeep(obj1, obj2);

  const expectedObject = { a: 1, b: 2, c: { x: 1, y: 2, z: 2 }, d: [ 1, 1, 2, 2 ], e: 2 };

  expect(obj3).toEqual(expectedObject);

});