'use strict';

/*
101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
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
var isSymmetric = function(root) {//递归
  if (root === null) return true;
  return helper(root.left, root.right);

  function helper(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    return left.val === right.val && helper(left.left, right.right) && helper(left.right, right.left);
  }
};

isSymmetric = function(root) {//循环
  if (root === null) return true;
  let queue = [], left, right;
  queue.push(root.left, root.right);
  while (queue.length > 0) {
    left = queue.shift(), right = queue.shift();
    if (left === null && right === null) continue;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;

    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }
  return true;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(3);
root.right.left = new TreeNode(4);
console.log(isSymmetric(root));

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(3);
root.right = new TreeNode(2);
root.right.right = new TreeNode(3);
console.log(isSymmetric(root));
