const { is, typeOf, lengthOf } = require('../../dist');

test('If is func returns an object', () => {
    const result = is('hola')
    expect(typeOf(result)).toEqual('object');
});

test('if .string get in object works correctly.', () => {
    expect(is('hola').string).toEqual(true);
    expect(is(3).string).toEqual(false);
    expect(is([3]).string).toEqual(false);
    expect(is(new Date()).string).toEqual(false);
    expect(is({}).string).toEqual(false);
    expect(is(null).string).toEqual(false);
    expect(is(undefined).string).toEqual(false);
});

test('if .email get in object works correctly.', () => {
    expect(is('hola').email).toEqual(false);
    expect(is('hola@email.co').email).toEqual(true);
    expect(is(3).email).toEqual(false);
    expect(is([3]).email).toEqual(false);
    expect(is(new Date()).email).toEqual(false);
    expect(is({}).email).toEqual(false);
    expect(is(null).email).toEqual(false);
    expect(is(undefined).email).toEqual(false);
});

test('if .number get in object works correctly.', () => {
    expect(is('hola').number).toEqual(false);
    expect(is('hola@email.co').number).toEqual(false);
    expect(is(3).number).toEqual(true);
    expect(is([3]).number).toEqual(false);
    expect(is(new Date()).number).toEqual(false);
    expect(is({}).number).toEqual(false);
    expect(is(null).number).toEqual(false);
    expect(is(undefined).number).toEqual(false);
});

test('if .float get in object works correctly.', () => {
    expect(is('hola').float).toEqual(false);
    expect(is('hola@email.co').float).toEqual(false);
    expect(is(3).float).toEqual(false);
    expect(is(3.3).float).toEqual(true);
    expect(is([3]).float).toEqual(false);
    expect(is(new Date()).float).toEqual(false);
    expect(is({}).float).toEqual(false);
    expect(is(null).float).toEqual(false);
    expect(is(undefined).float).toEqual(false);
});

test('if .nan get in object works correctly.', () => {
    expect(is('hola').nan).toEqual(true);
    expect(is('hola@email.co').nan).toEqual(true);
    expect(is(3).nan).toEqual(false);
    expect(is(3.3).nan).toEqual(false);
});

test('if .boolean get in object works correctly.', () => {
    expect(is('hola').boolean).toEqual(false);
    expect(is('hola@email.co').boolean).toEqual(false);
    expect(is(true).boolean).toEqual(true);
    expect(is(false).boolean).toEqual(true);
    expect(is(3).boolean).toEqual(false);
    expect(is(3.3).boolean).toEqual(false);
    expect(is([3]).boolean).toEqual(false);
    expect(is(new Date()).boolean).toEqual(false);
    expect(is({}).boolean).toEqual(false);
    expect(is(null).boolean).toEqual(false);
    expect(is(undefined).boolean).toEqual(false);
});

test('if .true get in object works correctly.', () => {
    expect(is('hola').true).toEqual(false);
    expect(is('hola@email.co').true).toEqual(false);
    expect(is(true).true).toEqual(true);
    expect(is(false).true).toEqual(false);
    expect(is(3).true).toEqual(false);
    expect(is(3.3).true).toEqual(false);
    expect(is([3]).true).toEqual(false);
    expect(is(new Date()).true).toEqual(false);
    expect(is({}).true).toEqual(false);
    expect(is(null).true).toEqual(false);
    expect(is(undefined).true).toEqual(false);
});

test('if .false get in object works correctly.', () => {
    expect(is('hola').false).toEqual(false);
    expect(is('hola@email.co').false).toEqual(false);
    expect(is(true).false).toEqual(false);
    expect(is(false).false).toEqual(true);
    expect(is(3).false).toEqual(false);
    expect(is(3.3).false).toEqual(false);
    expect(is([3]).false).toEqual(false);
    expect(is(new Date()).false).toEqual(false);
    expect(is({}).false).toEqual(false);
    expect(is(null).false).toEqual(false);
    expect(is(undefined).false).toEqual(false);
});

test('if .lengthOf() get in object works correctly.', () => {
    expect(is(2).lengthOf([1, 2])).toEqual(true);
    expect(is(10).lengthOf(['hola', 'adios'])).toEqual(false);
});

test ('if .in() get in object works correctly', () => {
    expect(is("aspen").in(["aspen", "colorado"])).toBe(true);
})
