'use strict';

/*
400. Nth Digit

Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 231).

Example 1:

Input:
3

Output:
3
Example 2:

Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
*/

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let i = 1, factor = 9, power = 1;
  while (n > power * factor * i) {
    n -= power * factor * i;
    power *= 10;
    i++;
  }
  let num = power + Math.ceil(n / i) - 1;
  let pos = n % i;
  let str = String(num);
  return pos === 0 ? +str[str.length - 1] : +str[pos - 1];
};

console.log(findNthDigit(3));
console.log(findNthDigit(11));
console.log(findNthDigit(12));
console.log(findNthDigit(12));
console.log(findNthDigit(191));
