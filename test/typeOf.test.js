const { typeOf } = require('../werkstatt');

test('if the passed value of type \'null\'', () => {
  let name = null;
  expect(typeOf(name)).toEqual('null');
});

test('if the passed value of type \'undefined\'', () => {
  let lastName;
  expect(typeOf(lastName)).toEqual('undefined');
});

test('if the passed value of type \'string\'', () => {
  expect(typeOf('lastName')).toEqual('string');
});

test('if the passed value of type \'boolean\'', () => {
  expect(typeOf(true)).toEqual('boolean');
});

test('if the passed value of type \'function\'', () => {
  expect(typeOf(() => {})).toEqual('function');
});

test('if the passed value of type \'number\'', () => {
  expect(typeOf(3)).toEqual('number');
});

test('if the passed value of type \'float\'', () => {
  expect(typeOf(3.9)).toEqual('float');
});

test('if the passed value of type \'array\'', () => {
  expect(typeOf([3.9])).toEqual('array');
});

test('if the passed value of type \'object\'', () => {
  expect(typeOf({ name: "Jorge" })).toEqual('object');
});

test('if the passed value of type \'object\'', () => {
  expect(typeOf(new Date())).toEqual('object');
});
  
  
  
  