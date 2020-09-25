import areEqual from '../other/areEqual';
import typeOf from '../other/typeOf';

function isLengthOf(value, len) {
  if (areEqual(typeOf(value), 'undefined') || areEqual(typeOf(value), 'null')) return false;
  if(Object.getPrototypeOf(value) === Object.prototype) {
    return Object.keys(value).length === len;
  }
  return value.length === len;
}

export default isLengthOf;