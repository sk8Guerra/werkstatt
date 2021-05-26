import isObject from '../object/isObject';
import isString from '../string/isString';
import isArray from '../array/isArray';
import isUndefined from './isUndefined';
import isNull from './isNull';

/**
 * Removes in an immutable way values or properties from arrays and objects.
 *
 * @param {string} propOrValue The value or property name.
 * @param {(Object|array[])} item Object or array to change.
 * @returns {(Object|array[])} .
 */

const removeFrom = (item, ...propsOrValues) => {
  const [props] = propsOrValues;

  if (isUndefined(item) || isNull(item)) return null;
  if (isUndefined(props) || isNull(props)) return null;

  if (isArray(props)) {
    if (isObject(item)) {
      const temp = { ...item };
      for (const prop in props) {
        delete temp[props[prop]];
      }
      return temp;
    }
    if (isArray(item)) {
      const temp = [...item];
      for (const value in props) {
        const element = props[value];
        if (isUndefined(element) || isNull(element)) return null;
        const index = temp.indexOf(element);
        temp.splice(index, 1);
      }
      return temp;
    }
  }
  if (isString(props)) {
    if (isObject(item)) {
      const temp = { ...item };
      for (const prop in propsOrValues) {
        delete temp[propsOrValues[prop]];
      }
      return temp;
    }
    if (isArray(item)) {
      return item.filter((element) => element !== props);
    }
  }
};

export default removeFrom;
