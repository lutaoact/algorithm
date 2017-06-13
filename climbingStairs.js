'use strict';

/*
70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.
*/

/*
分析：这个问题类似于找零钱，但找零钱问题其实更复杂，找零钱问题是不同数的组合，而上楼梯是不同数的排列。
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);//去掉第一阶和去掉第二阶之后分别存在的不同攀爬方式
};

climbStairs = function(n) {
  let results = [1, 2];
  for (let i = 2; i < n; i++) {
    results.push(results[i - 1] + results[i - 2]);
  }

  return results[n - 1];
};

console.log(climbStairs(4));
