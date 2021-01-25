import isObject from './isObject';
import isArray from '../array/isArray';

/**
 * Performs a deep merge of objects and returns a new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * 
 * @param {Object} target - Where second object will be merged.
 * @param {Object} source - Object to merge in terget.
 * @return {Object} new object merged.
 * 
*/

const mergeDeep = (target, source) => {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (isArray(targetValue) && isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}

export default mergeDeep;