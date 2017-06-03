'use strict';
//1.4.20

let a = [2, 5, 6, 7, 8, 4, 3, 1, 0, -1, -3];
console.log(bitonicSearch(a, -1));
console.log(bitonicSearch(a, 1));
console.log(bitonicSearch(a, -2));

//双调数组，我们假设至少含有3个元素，先递增后递减
//问题可以被拆解为先找双调数组的最大值，然后在最大值的左右两边分别查找key
function bitonicSearch(a, key) {
  let N = a.length;
  if (key < a[0] && key < a[N - 1]) {//key小于这个数组中的最小值，则直接返回
    return -1;
  }
  let localMaximumIndex = LocalMaximum(a);
  if (key > a[localMaximumIndex]) {//大于数组的最大值，也直接返回
    return -1;
  }
  let result = binarySearchLocalAsc(a, key, 0, localMaximumIndex);//从左半边找

  if (result > -1) {
    return result;
  }
  return binarySearchLocalDesc(a, key, localMaximumIndex + 1, N - 1);//从右半边找
}


function binarySearchLocalAsc(a, key, low, high) {//升序
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

function binarySearchLocalDesc(a, key, low, high) {//降序
  let mid;
  while (low <= high) {
    mid = parseInt((low + high) / 2);
    if (a[mid] === key) {
      return mid;
    } else if (a[mid] < key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

function LocalMaximum(a) {
  let N = a.length;
  //只有先增后减的情况，才需要运算，但正因为先增后减，所以一定存在局部最大值
  let low = 0, high = N - 1;
  while (low < high) {
    let mid = parseInt((low + high) / 2);

    //双调数组中，三个数字只有三种可能的排列顺序
    if (a[mid] > a[mid - 1]) {  //   *
      if (a[mid] > a[mid + 1]) {//  / \
        return mid;             // *   * 发现mid左右两边都比较小，则mid就是局部大值

      } else {                  //   *
        low = mid;              //  *
      }                         // *     mid出现在递增序列中，那么从mid的右边找

    } else {                    // *
      high = mid;               //  *
    }                           //   *   mid出现在递减序列中，那么从mid的左边找
  }
  return -1;
}
