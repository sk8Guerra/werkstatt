import areEqual from './areEqual';
import typeOf from './typeOf';

const has = (item, propOrValue) => {
  if (areEqual(typeOf(item), 'array')) {
    return item.includes(propOrValue);
  }
  if(areEqual(typeOf(item), 'object')) {
    return propOrValue in item;
  }
}

export default has;