import isDefined from '../other/isDefined';

/**
 * Converts array like objects/NodeList to array. e.g. 'arguments' arg in a function.
 *
 * @param {Object} arrayLikeObject The array like object/NodeList.
 * @returns {Array} An array where you can use all array's methods.
 */

const toArray = (arrayLikeObject) => {
  if (isDefined(arrayLikeObject)) {
    return Array.prototype.slice.call(arrayLikeObject);
  }

  return [];
};

export default toArray;
