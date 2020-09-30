import isTruthy from './isTruthy';

const isFalsy = (value) => {
  return !isTruthy(value);
};

export default isFalsy;