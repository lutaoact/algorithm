'use strict';

/*
69. Sqrt(x)

Implement int sqrt(int x).

Compute and return the square root of x.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let lo = 1, hi = x, mid, quotient;
  while (lo <= hi) {
    mid = ((hi - lo) / 2 | 0) + lo;
    quotient = x / mid;

    if (quotient > mid) {
      lo = mid + 1;
    } else if (quotient < mid) {
      hi = mid - 1;
    } else {
      return mid;
    }
  }
  return hi;//小于等于平方根的最大整数
};

console.log(mySqrt(25));
console.log(mySqrt(26));
console.log(mySqrt(36));
console.log(mySqrt(48));
console.log(mySqrt(49));
