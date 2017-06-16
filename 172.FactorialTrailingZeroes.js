'use strict';

/*
172. Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
//太慢了，达不到对数级
var trailingZeroes = function(n) {
  let count = 0;
  while (n >= 5) {
    let i = n;
    while (i >= 5) {
      if (i % 5 !== 0) break;
      count++;
      i = i / 5;
    }
    n--;
  }
  return count;
};

//n / 5 每5个出现一个5，然后除以5再迭代，表示出现25，也就是两个5的次数，然后就是125，表示3个5的次数
var trailingZeroes = function(n) {
  let count = 0;

  while (n > 0) {
    n = ~~(n / 5);
    count += n;
  }
  return count;
};

for (let i = 0; i < 1000000; i++) {
  console.log(i, trailingZeroes(i));
}
