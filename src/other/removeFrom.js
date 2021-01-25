import isObject from '../object/isObject';
import isString from '../string/isString';
import isArray from '../array/isArray';

/**
 * Removes in an immutable way values or properties from arrays and objects.
 *
 * @param {string} propOrValue The value or property name.
 * @param {(Object|array[])} item Object or array to change.
 * @returns {(Object|array[])} . 
 */

const removeFrom = (item, ...propsOrValues) => {
  const props = propsOrValues[0];
  if (isArray(props)) {
    if (isObject(item)) {
      let temp = Object.assign({}, item);
      for (const prop in props) {
        delete temp[props[prop]];
      }
      return temp;
    }
    if (isArray(item)) {
      let temp = [ ...item ];
      for (const value in props) {
        let index = temp.indexOf(props[value]);
        temp.splice(index, 1);
      }
      return temp;
    }
  }
  if(isString(props)) {
    if (isObject(item)) {
      let temp = Object.assign({}, item);
      for (const prop in propsOrValues) {
        delete temp[propsOrValues[prop]];
      }
      return temp;
    }
    if (isArray(item)) {
      return item.filter(element => element !== props);
    }
  }
};

export default removeFrom;