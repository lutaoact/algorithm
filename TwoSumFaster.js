'use strict';

let a = [-18, -15, -12, -7, 0, 0, 0, 0, 2, 3, 12, 15, 15, 17, 18];
console.log(TwoSumFaster(a));

function TwoSumFaster(a) {
  let low = 0, high = a.length - 1, count = 0;
  while (low < high) {
    let sum = a[low] + a[high];
    console.log(low, high, sum);
    if (sum === 0) {
      count++;
      high--;
      low++;
    } else if (sum < 0) {
      low++;
    } else {
      high--;
    }
  }
  return count;
}
