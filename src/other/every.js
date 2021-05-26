import typeOf from './typeOf';

/**
 * Check if every argument has a specific data type.
 *
 * @param {(number[]|string[]|boolean[])} args The arguments to check.
 * @returns {boolean} true: if every passed argument matches the desired type.
 *  false: if every passed argument does not match the desired type.
 */

const every = (...args) => ({
  get is() {
    return {
      get true() {
        for (const arg of args) {
          if (typeOf(arg) === 'boolean' && arg) continue;
          return false;
        }
        return true;
      },
      get string() {
        for (const arg of args) {
          if (typeOf(arg) === 'string') continue;
          return false;
        }
        return true;
      },
      get number() {
        for (const arg of args) {
          if (typeOf(arg) === 'number') continue;
          return false;
        }
        return true;
      },
    };
  },
});

export default every;
