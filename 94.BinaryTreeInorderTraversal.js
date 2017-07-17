'use strict';

/*
94. Binary Tree Inorder Traversal

Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].

Note: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
//循环方法
var inorderTraversal = function(root) {
  let node = root, stack = [], results = [];
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      results.push(node.val);
      node = node.right;
    }
  }
  return results;
};

//递归方法
inorderTraversal = function(root) {
  let results = [];
  inOrder(root);
  return results;

  function inOrder(root) {
    if (root === null) return;
    inOrder(root.left);
    results.push(root.val);
    inOrder(root.right);
  }
};

/*
     4
   /   \
  2     7
 / \   / \
1   3 6   9
*/

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log(inorderTraversal(root));
