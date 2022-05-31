import { STRING } from "./constants";

/**
 * localStorage.setItem()
 * @param {string} name The name of item
 * @param {*} data The value of item
 */
export const setItemOfLocalStorage = (name = 'x', data = 'x') => {
  if (typeof data === STRING) {
    localStorage.setItem(name, data);
  } else {
    localStorage.setItem(name, JSON.stringify(data));
  }
};

/**
 * localStorage.getItem()
 * @param {string} name The name of item
 * @returns The value of item
 */
export const getItemOfLocalStorage = (name = 'x') => {
  return JSON.parse(localStorage.getItem(name));
};

/**
 * localStorage.removeItem()
 * @param {string} name The name of item
 */
export const removeItemOfLocalStorage = (name = 'x') => {
  localStorage.removeItem(name);
};

/**
 * Remove the prefix '@' from a string
 * @param {string} value String that has whether the prefix '@' or not.
 * @returns String that has no prefix '@'
 */
export const removeAtMarkPrefix = (value) => {
  if (value[0] === '@') {
    return value.slice(1);
  } else {
    return value;
  }
};