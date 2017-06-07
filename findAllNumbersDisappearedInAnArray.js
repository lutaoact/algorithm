'use strict';
/*
448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

/*
遍历数组，将每个值作为索引，将该索引对应的数组元素标为负值，这样，凡是没有被标为负值的数组元素，其相应的数组索引代表的数字就一定没有出现过。
例：因为数组索引从0开始，所以我们会有值减1的操作。
a[0] = 2，我们拿到数值2，对应的数组索引为2 - 1 = 1，将a[1]标为负值。我们再次遍历的时候，如果发现a[1]负的，则表示2肯定出现过，如果a[2]是正的，那表示3没有出现过
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let N = nums.length;
  for (let i = 0; i < N; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] >= 0) {
      nums[index] = -nums[index];
    }
  }

  let results = [];
  for (let i = 0; i < N; i++) {//数组中的负值表示这个索引
    if (nums[i] > 0) results.push(i + 1);
  }
  return results;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
