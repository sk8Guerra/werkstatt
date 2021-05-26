import isString from './isString';

/**
 * Check whether the passed string is a valid email or not.
 *
 * @param {string} string The string to check.
 * @returns {boolean} true: if the string is a valid email.
 *  false: if the string is not a valid email.
 */

const isEmail = (value) => {
  if (isString(value)) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase());
  }

  return false;
};

export default isEmail;
