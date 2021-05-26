import isTruthy from './isTruthy';

/**
 * Check whether the passed argument is falsy (tends to be false) or not.
 * @param {any} value The value to check.
 * @returns {boolean} true: if the passed argument is falsy. false: if the argument is not falsy.
 */

const isFalsy = (value) => !isTruthy(value);

export default isFalsy;
