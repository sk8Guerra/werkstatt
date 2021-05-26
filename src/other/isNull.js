/**
 * Check whether the passed value is null or not.
 *
 * @param {any} value The value to check.
 * @returns {boolean} true: if the value is null. false: if the value is not null.
 */

import areEqual from './areEqual';
import typeOf from './typeOf';

const isNull = (value) => areEqual(typeOf(value), 'null');

export default isNull;
