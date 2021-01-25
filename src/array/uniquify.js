
/**
 * Makes every object in the array unique.
 *
 * @param {Array} array The array to be processed.
 * @param {Function} fn Function that describes by which object property will be uniquified.
 * @returns {Array}  Array with every object uniquified.
 */

const uniquify = (array, fn) => array.reduce((accumulator, currentValue) => {
    if (!accumulator.some(element => fn(currentValue, element))) accumulator.push(currentValue);
    return accumulator;
}, []);

export default uniquify;