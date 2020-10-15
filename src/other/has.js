import areEqual from './areEqual';
import typeOf from './typeOf';

/**
 * Check whether the passed value has a specific property or value.
 *
 * @param {(Object|array[])} item The value to search on.
 * @param {string} propOrValue The value to look for.
 * @returns {boolean} true: if the second argument is contained in the first one. false: if the second argument is not contained in the first one. 
 */

const has = (item, propOrValue) => {
  if (areEqual(typeOf(item), 'array')) {
    return item.includes(propOrValue);
  }
  if(areEqual(typeOf(item), 'object')) {
    return propOrValue in item;
  }
}

export default has;