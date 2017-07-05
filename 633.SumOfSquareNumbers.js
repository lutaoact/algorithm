'use strict';

/*
633. Sum of Square Numbers

Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:
Input: 3
Output: False
*/

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let lo = 0, hi = Math.floor(Math.sqrt(c)), v;
  while (lo <= hi) {
    v = lo * lo + hi * hi;
    if (v < c) lo++;
    else if (v > c) hi--;
    else return true;
  }
  return false;
};

console.log(judgeSquareSum(17));
