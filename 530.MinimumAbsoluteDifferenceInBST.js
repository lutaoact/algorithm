'use strict';

/*
530. Minimum Absolute Difference in BST
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.
Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
Note: There are at least two nodes in this BST.
*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let stack = [], node = root, min = Infinity, prev = null;
  stack.push(node);
  while (node.left) {
    node = node.left;
    stack.push(node);
  }

  //栈中最接近的两个元素总是被连续pop出来，一定要理解这个关键
  while (stack.length > 0) {
    node = stack.pop();
    if (prev !== null && node.val - prev < min) min = node.val - prev;
    prev = node.val;
    if (node.right) {
      node = node.right;
      stack.push(node);

      while (node.left) {
        node = node.left;
        stack.push(node);
      }
    }
  }
  return min;
};

getMinimumDifference = function(root) {
  let min = Infinity, prev = null;
  function inOrder(node) {//中序遍历
    if (node === null) return;
    inOrder(node.left);
    if (prev !== null && node.val - prev < min) min = node.val - prev;

    prev = node.val;
    inOrder(node.right);
  }
  inOrder(root);
  return min;
};

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log(getMinimumDifference(root));
