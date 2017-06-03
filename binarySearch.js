'use strict';

let a = [2, 2, 5, 6, 6, 7, 7, 7, 7, 8, 8, 9, 11, 11, 13, 15];
console.log(binarySearch(a, 11));
console.log(binarySearch(a, 2));
console.log(binarySearch(a, 13));
console.log(binarySearch(a, 15));

function binarySearch(a, key) {
  let low = 0, high = a.length - 1;
  return binarySearchLocal(a, key, low, high);
}

function binarySearchLocal(a, key, low, high) {
  let mid;
  while (low <= high) {
    mid = parseInt((low + high) / 2);
    if (a[mid] === key) {
      return mid;
    } else if (a[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
