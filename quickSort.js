'use strict';

function quickSort(list) {
  let length = list.length;
  if (length <= 1) return list;
  let pIndex = parseInt(length / 2), pivot = list[pIndex], left = [], right = [];
  for (let i = 0; i < length; i++) {
    if (i === pIndex) continue;
    let ele = list[i];
    ele <= pivot ? left.push(ele) : right.push(ele);
  }
//  console.log(left, pivot, right);
  return quickSort(left).concat([pivot]).concat(quickSort(right));
}

let ary = [2, 1, 8, 7, 2, 3, 6, 5, 9, 8, 3, 11, 19, 17, 12, 63, 25];
console.log(quickSort(ary));
