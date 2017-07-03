'use strict';

/*
108. Convert Sorted Array to Binary Search Tree

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  return buildSubTree(nums, 0, nums.length - 1);

  function buildSubTree(nums, lo, hi) {
    if (lo > hi) return null;
    let mid = ((hi - lo) / 2 | 0) + lo;
    let node = new TreeNode(nums[mid]);
    node.left = buildSubTree(nums, lo, mid - 1);
    node.right = buildSubTree(nums, mid + 1, hi);

    return node;
  }
};

console.log(sortedArrayToBST([1, 2, 3, 5, 8, 9, 10]));
