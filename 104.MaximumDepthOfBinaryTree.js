'use strict';

/*
104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
var maxDepth = function(root) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;
  if (root.left === null) return 1 + maxDepth(root.right);
  if (root.right === null) return 1 + maxDepth(root.left);

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

let root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.left.right = new TreeNode(5);

console.log(maxDepth(root));
