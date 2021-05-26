import isString from '../string/isString';
import isEmail from '../string/isEmail';
import isNumber from '../number/isNumber';
import isFloat from '../float/isFloat';
import lengthOf from '../array/lengthOf';
import typeOf from './typeOf';
import has from './has';

const is = (value) => {
  const matchers = {};
  Object.defineProperty(matchers, 'string', { get: () => isString(value) });
  Object.defineProperty(matchers, 'email', { get: () => isEmail(value) });
  Object.defineProperty(matchers, 'number', { get: () => isNumber(value) });
  Object.defineProperty(matchers, 'float', { get: () => isFloat(value) });
  Object.defineProperty(matchers, 'nan', { get: () => isNaN(value) });

  Object.defineProperty(matchers, 'boolean', { get: () => typeOf(value) === 'boolean' });
  Object.defineProperty(matchers, 'true', { get: () => typeOf(value) === 'boolean' && value });
  Object.defineProperty(matchers, 'false', { get: () => typeOf(value) === 'boolean' && !value });

  matchers.lengthOf = (array) => lengthOf(array) === value;

  matchers.in = (array) => has(array, value);

  return matchers;
};

export default is;
