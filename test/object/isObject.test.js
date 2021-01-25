const { isObject } = require('../../dist');

test('Check wether an argument is object or not', () => {
  
  const obj1 = {
    a: 1,
    b: 1, 
    c: { x: 1, y: 1 },
    d: [ 1, 1 ]
  }

  const result1 = isObject(obj1);
  const result2 = isObject(obj1.a);

  expect(result1).toBe(true);
  expect(result2).toBe(false);
});