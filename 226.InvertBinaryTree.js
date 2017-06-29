'use strict';

/*
226. Invert Binary Tree
DescriptionHintsSubmissionsSolutions
Discuss   Editorial Solution Pick One
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1

Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) return null;
  let left = root.left;
  let right = root.right;
  root.left = invertTree(right);
  root.right = invertTree(left);

  return root;
};

invertTree = function(root) {
  if (root === null) return null;
  let stack = [];
  stack.push(root);

  while (stack.length > 0) {
    let node = stack.pop();
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;

    if (node.left !== null) stack.push(node.left);
    if (node.right !== null) stack.push(node.right);
  }

  return root;
};


let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log(invertTree(root));
