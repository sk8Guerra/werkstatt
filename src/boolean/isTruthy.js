import isUndefined from '../other/isUndefined';
import isNull from '../other/isNull';
import areEqual from '../other/areEqual';
import isNumber from '../number/isNumber';
import isZero from '../number/isZero';
import typeOf from '../other/typeOf';
import isLengthOf from '../array/isLengthOf';

const isTruthy = value => {
  if (isUndefined(value) || isNull(value)) return false;
  if (areEqual(String(value), 'false')) return false;
  if(isNumber(value)) {
    if(isZero(value)) {
     return false; 
    } else {
      return true;
    }
  }
  if(String(value) === 'NaN') return false;
  if(typeOf(value) === 'string') {
    if(isLengthOf(value, 0)) return false;
    return true
  }
  return true;
}

export default isTruthy;