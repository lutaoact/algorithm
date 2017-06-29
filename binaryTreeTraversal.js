'use strict';

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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

function postOrder(root) {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}
//postOrder(root);// 1 3 2 6 9 7 4

function preOrder(root) {
  if (root === null) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}
//preOrder(root);// 4 2 1 3 7 6 9

function inOrder(root) {
  if (root === null) return;
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}
//inOrder(root);// 1 2 3 4 6 7 9
