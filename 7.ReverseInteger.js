'use strict';

/*
7. Reverse Integer
DescriptionHintsSubmissionsSolutions
Discuss   Editorial Solution Pick One
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let n = Math.abs(x), MAX = 2147483647, result = 0;
  while (n > 0) {
    result *= 10;
    if (result > MAX) return 0;
    result += n % 10;
    n = parseInt(n / 10);
  }
  return x >= 0 ? result : -result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(0));
console.log(reverse(2147483647));
