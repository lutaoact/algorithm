'use strict';

/*
263. Ugly Number

Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num <= 0) return false;

  [2, 3, 5].forEach(function(i) {
    while (num % i === 0) {
      num /= i;
    }
  });
  return num === 1;
};

console.log(isUgly(-1));
console.log(isUgly(1));
console.log(isUgly(8));
console.log(isUgly(60));
console.log(isUgly(30));
console.log(isUgly(14));
