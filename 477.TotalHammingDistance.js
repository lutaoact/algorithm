'use strict';

/*
477. Total Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Now your job is to find the total Hamming distance between all pairs of the given numbers.

Example:
Input: 4, 14, 2

Output: 6

Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case). So the answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
Note:
Elements of the given array are in the range of 0 to 10^9
Length of the array will not exceed 10^4.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//暴力算法的复杂度是O(n^2)，以下算法为O(n)
//思路：统计所有n个数中，指定位上的bit是0的数字的个数和是1的数字的个数。这样，n个数字就分到了两个阵营中，假设个数分别是k和n-k。因为相同阵营的数字，这个bit位是相同的，所以对最终的hamming distance没有贡献，只有来自两个阵营中的数字组合时才有贡献，对最终结果的贡献为k*(n-k)。
var totalHammingDistance = function(nums) {
  let N = nums.length, total = 0;
  for (let i = 0; i < 32; i++) {
    let bitCount = 0;
    for (let j = 0; j < N; j++) {
      bitCount += (nums[j] >>> i) & 1;
    }
    total += bitCount * (N - bitCount);
  }
  return total;
};

console.log(totalHammingDistance([4, 14, 2]));
