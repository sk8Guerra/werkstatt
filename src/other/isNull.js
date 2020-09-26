import areEqual from './areEqual';
import typeOf from './typeOf';

const isNull = value => {
  return areEqual(typeOf(value), 'null');
}

export default isNull;