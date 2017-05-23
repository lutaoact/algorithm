'use strict';

let a = [7, 6, 8, 6, 7, 2, 2, 5, 9, 7, 11, 15, 11, 13, 7, 8];
console.log(countPairs(a));

function countPairs(a) {
  a.sort(cmpNum);
  let count = 0;
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] === a[i + 1]) {
      console.log(a[i]);
      count++;
      i++;
    }
  }
  return count;
}

function cmpNum(a, b) {
  return a - b;
}
