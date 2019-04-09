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

// 还要考虑重复值
function binarySearchToGetLeastIndex(nums, key) {// 找出值大于等于key的最小索引
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (nums[mid] === key) return mid;

    if (nums[mid] > key) high = mid - 1;
    else if (nums[mid] < key) low = mid + 1;
  }
  return low;
}
