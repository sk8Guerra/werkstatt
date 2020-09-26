import areEqual from './areEqual';
import typeOf from './typeOf';

const isDefined = value => {
  if (areEqual(typeOf(value), 'undefined') || areEqual(typeOf(value), 'null')) return false;
  return true;
}

export default isDefined;