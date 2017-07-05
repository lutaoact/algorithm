'use strict';

/*
110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root === null) return true;
  return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);

  function depth(root) {
    if (root === null) return 0;
    return 1 + Math.max(depth(root.left), depth(root.right));
  }
};

isBalanced = function(root) {
  const UNBALANCED = -1;
  return depth(root) !== UNBALANCED;

  function depth(root) {
    if (root === null) return 0;

    let leftD = depth(root.left);
    if (leftD === UNBALANCED) return UNBALANCED;

    let rightD = depth(root.right);
    if (rightD === UNBALANCED) return UNBALANCED;

    if (Math.abs(leftD - rightD) > 1) return UNBALANCED;

    return 1 + Math.max(leftD, rightD);
  }
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
//root.right = new TreeNode(3);//注释掉这行结果为false，否则为true
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
console.log(isBalanced(root));
