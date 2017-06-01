'use strict';

let a = [-50, -18, -15, -12, -9, -7, 0, 0, 0, 0, 2, 3, 5, 12, 15, 15, 16, 17, 18, 19, 30, 45];
//a = [-50, -18, -15, -12, -9, -7, 0, 0, 0, 0, 2];
console.log(ThreeSumFaster(a));

function ThreeSumFaster(a) {
  let i = 0, N = a.length, count = 0;
  OUTER:
  while (i < N - 2) {
    let low = i + 1, high = N - 1;
    if (a[i] + a[low] > 0) {//如果前两个数的和已经大于0，那就没有必要再加第三个了
      break OUTER;
    }
    INNER:
    while (low < high) {
      if (a[low] + a[high] < 0) {//如果后两个数的和已经小于0，那就没有必要再加第一个了
        break INNER;
      }
      let sum = a[i] + a[low] + a[high];
      console.log(a[i], a[low], a[high], sum, count);
      if (sum === 0) {
        count++;
        high--;
        low++
      } else if (sum < 0) {
        low++;
      } else {
        high--;
      }
    }
    i++;
  }
  return count;
}
