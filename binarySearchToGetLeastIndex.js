'use strict';

let a = [2, 2, 5, 6, 6, 7, 7, 7, 7, 8, 8, 9, 11, 11, 13, 15];
console.log(binarySearchToGetLeastIndex(a, 11));
console.log(binarySearchToGetLeastIndex(a, 2));
console.log(binarySearchToGetLeastIndex(a, 13));
console.log(binarySearchToGetLeastIndex(a, 15));

function binarySearchToGetLeastIndex(a, key) {
  let low = 0, high = a.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (a[mid] < key) {
      low = mid + 1;
    } else if (a[mid] > key) {
      high = mid - 1;
    } else if (a[mid] === key && mid - 1 !== -1 && a[mid - 1] === key) {
      high = mid - 1;
    } else if (a[mid] === key) {
      return mid;
    }
  }
  return -1;
}
