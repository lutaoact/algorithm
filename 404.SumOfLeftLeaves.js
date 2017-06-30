'use strict';

/*
404. Sum of Left Leaves

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
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
var sumOfLeftLeaves = function(root) {
  if (root === null) return 0;
  let result = 0;
  if (root.left !== null) {
    if (root.left.left === null && root.left.right === null) result += root.left.val;
    else result += sumOfLeftLeaves(root.left);
  }

  result += sumOfLeftLeaves(root.right);
  return result;
};

sumOfLeftLeaves = function(root) {
  if (root === null) return 0;

  let node = null, stack = [], result = 0;
  stack.push(root);
  while (stack.length > 0) {
    node = stack.pop();
    if (node.left !== null) {
      if (node.left.left === null && node.left.right === null) result += node.left.val;
      else stack.push(node.left);
    }
    if (node.right !== null) {
      stack.push(node.right);
    }
  }
  return result;
};

/*
    3
   / \
  9  20
    /  \
   15   7
*/
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.left.left = new TreeNode(10);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(sumOfLeftLeaves(root));
