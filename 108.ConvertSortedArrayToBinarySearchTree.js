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

sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  let head = new TreeNode(0);
  let nodeStack = [], leftIndexStack = [], rightIndexStack = [];
  nodeStack.push(head);
  leftIndexStack.push(0);
  rightIndexStack.push(nums.length - 1);

  while (nodeStack.length > 0) {
    let node = nodeStack.pop(), left = leftIndexStack.pop(), right = rightIndexStack.pop();
    let mid = ((right - left) / 2 | 0) + left;
    node.val = nums[mid];
    if (left <= mid - 1) {
      node.left = new TreeNode(0);
      nodeStack.push(node.left);
      leftIndexStack.push(left);
      rightIndexStack.push(mid - 1);
    }
    if (mid + 1 <= right) {
      node.right = new TreeNode(0);
      nodeStack.push(node.right);
      leftIndexStack.push(mid + 1);
      rightIndexStack.push(right);
    }
  }
  return head;
};

console.log(sortedArrayToBST([1, 2, 3, 5, 8, 9, 10]));
