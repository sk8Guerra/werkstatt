const { removeFrom, lengthOf } = require('../../dist');

test(
  'Removes several properties from an object. (immutable)',
  () => {
    const object = {
      name: 'Jorge',
      age: 20,
      sex: 'M'
    };
    const props = ['name', 'sex'];
    const newObject = removeFrom(object, props);
    // or alternatively -> const newObject = removeFrom(object, 'name', 'sex');
    const expectObject = { age: 20 };

    expect(newObject).toEqual(expectObject);
});

test(
  'Removes one prop from an object. (immutable)', 
  () => {
    const object = {
      name: 'Jorge',
      age: 20,
      sex: 'M'
    };

    const newObject = removeFrom(object, 'name');
    const expectObject = { age: 20, sex: 'M' };

    expect(newObject).toEqual(expectObject);
});

test(
  'Removes one value from an array. (immutable)', 
  () => {
    const array = ['red', 'blue'];
    const value = 'blue';
    const newArray = removeFrom(array, value);
    const expectArray = ['red'];

    expect(lengthOf(newArray)).toBe(1);
    expect(newArray).toEqual(expect.arrayContaining(expectArray));
});

test(
  'Removes several values from an array. (immutable)', 
  () => {
    const array = ['red', 'blue', 'pink'];
    const values = ['blue', 'red'];
    const newArray = removeFrom(array, values);
    const expectArray = ['pink'];

    expect(lengthOf(newArray)).toBe(1);
    expect(newArray).toEqual(expect.arrayContaining(expectArray));
});