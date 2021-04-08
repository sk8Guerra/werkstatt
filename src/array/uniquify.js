import isArray from "./isArray";
import areEqual from "../other/areEqual";
import typeOf from "../other/typeOf";

/**
 * Makes every object in the array unique.
 *
 * @param {Array} array The array to be processed.
 * @param {Function} fn Function that describes by which object property will be uniquified.
 * @returns {Array}  Array with every object uniquified.
 */

const uniquify = (array, fn) => {
    if (isArray(array) && areEqual(typeOf(fn), 'function')) {
        return array.reduce((accumulator, currentValue) => {
            if (!accumulator.some(element => fn(currentValue, element))) accumulator.push(currentValue);
            return accumulator;
        }, []);
    }

    return []
}

export default uniquify;
