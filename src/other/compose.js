
/**
 * Takes any number of functions and returns a function which takes the initial value.
 * Iterates right-to-left over each function. The initial value will be an accumulated,
 * passing it through each function. 
 *
 * @param {Array<fns>} fns Functions to be excecuted.
 * @returns {Function} Function that can be excecuted with an initial value.
 */

const compose = (...fns) => {

  /**
   * Returns an accumulated value passed to each function.
   *
   * @param {any} value Initial value, to be passed from right to left to each funtion.
   * @returns {any} Accumulated value.
   */

  return value => {
    return fns.reduceRight((accumulator, currentValue) => {
      return currentValue(accumulator)
    }, value)
  }
};

export default compose;
