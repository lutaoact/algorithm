'use strict';

let a = [2, 2, 5, 6, 6, 7, 7, 7, 7, 8, 8, 9, 11, 11, 13, 15, 15, 15, 15];
console.log(binarySearchToGetKeyCount(a, 11));
console.log(binarySearchToGetKeyCount(a, 2));
console.log(binarySearchToGetKeyCount(a, 13));
console.log(binarySearchToGetKeyCount(a, 15));
console.log(binarySearchToGetKeyCount(a, 7));

function binarySearchToGetKeyCount(a, key) {
  let low = 0, high = a.length - 1;
  return search(a, key, low, high);
}

function search(a, key, low, high) {
  let count = 0;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (a[mid] < key) {
      low = mid + 1;
    } else if (a[mid] > key) {
      high = mid - 1;
    } else if (a[mid] === key) {
      count++;
      if (mid - 1 !== -1 && a[mid - 1] === key) {
        count += search(a, key, low, mid - 1);
      }
      if (mid + 1 !== a.length && a[mid + 1] === key) {
        count += search(a, key, mid + 1, high);
      }
      return count;
    }
  }
  return 0;
}
