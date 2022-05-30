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