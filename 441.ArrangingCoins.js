'use strict';

/*
441. Arranging Coins

You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:

n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
Example 2:

n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
*/

/*
分析：这就是解一元二次方程，还记得求根公式吗？对正根向下取整
*/

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return (Math.sqrt(8 * n + 1) - 1) / 2 | 0;
};

console.log(arrangeCoins(0));
console.log(arrangeCoins(10));
