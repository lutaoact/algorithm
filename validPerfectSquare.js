'use strict';

/*
367. Valid Perfect Square

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False
*/

/**
 * @param {number} num
 * @return {boolean}
 */
//这种方法太慢了
var isPerfectSquare = function(num) {
  if (num === 1) return true;

  for (let i = 2; i <= num / 2 | 0; i++) {
    if (num % i === 0) {
      num = num / i / i;
      i = 1;//通过i++之后，i重新变成了2
      if (num === 1) return true;
    }
  }
  return false;
};

//A square number is 1+3+5+7+...
isPerfectSquare = function(num) {
  for (let i = 1; num > 0; i+= 2) {
    num -= i;
  }
  return num === 0;
};

//二分查找
isPerfectSquare = function(num) {
  let lo = 1, hi = num, mid, quotient;
  while (lo <= hi) {
    mid = ((hi - lo) / 2 | 0 + lo);
    quotient = num / mid;
    if (quotient > mid) {
      lo = mid + 1;
    } else if (quotient < mid) {
      hi = mid - 1;
    } else if (quotient === mid) {
      return true;
    }
  }
  return false;
};

console.log(isPerfectSquare(1));
//console.log(isPerfectSquare(2147483647));

for (let i = 4; i < 10000; i++) {
  if (isPerfectSquare(i)) {
    console.log(i);
  }
}
