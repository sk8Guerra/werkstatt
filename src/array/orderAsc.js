import subtract from '../number/subtract';
import lengthOf from './lengthOf';
import isArray from "./isArray";

function swap(items, firstIndex, secondIndex) {
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
};

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)], i = left, j = right;

  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j);
          i++;
          j--;
      }
  }
  return i;
};

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index - 1) {
          quickSort(items, left, index - 1);
      }
      if (index < right) {
          quickSort(items, index, right);
      }
  }
  return items;
};

/**
 * Order a list of numbers in ascendant mode.
 *
 * @param {number[]} array The list of numbers to order.
 * @returns {number[]} The list of numbers ordered.
 */

const orderAsc = (array) => {
  if (isArray(array)) {
      return quickSort(array, 0, subtract(lengthOf(array), 1));
  }

  return array;
}

export default orderAsc;
