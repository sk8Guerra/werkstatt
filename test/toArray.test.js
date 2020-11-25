const { toArray } = require('../dist');

test('Converts array like objects to array', () => {
    testToArray(1, 2, 3);
    function testToArray() {
        expect(toArray(arguments)).toEqual(expect.any(Array));
    }
});