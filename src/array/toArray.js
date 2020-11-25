
/**
 * Converts array like objects to array. e.g. 'arguments' arg in a function.
 *
 * @param {Object} arrayLikeObject The array like object.
 * @returns {Array} An array where you can use all array's methods.
 */

const toArray = (arrayLikeObject) => {
    return Array.prototype.slice.call(arrayLikeObject);
};

export default toArray;