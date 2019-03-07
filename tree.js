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
           \
            10
*/

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);
root.right.right.right = new TreeNode(10);

function depth(root) {
  if (root === null) return 0;
  return 1 + Math.max(depth(root.left), depth(root.right));
}
console.log(depth(root));

function invertTree(root) {
  if (root === null) return null;

  let tmp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(tmp);
  return root;
}

function invertTreeIteratively(root) {
  if (root === null) return null;

}

console.log(invertTree(root));
