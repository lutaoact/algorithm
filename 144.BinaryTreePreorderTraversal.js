'use strict';

/*
144. Binary Tree Preorder Traversal

Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].

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
var preorderTraversal = function(root) {
  if (root === null) return [];
  let results = [], stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    results.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return results;
};

preorderTraversal = function(root) {
  let node = root, results = [], rights = [];//rights为存储右子树的栈
  while (node) {
    results.push(node.val);
    if (node.right) {
      rights.push(node.right);
    }
    node = node.left;
    if (node === null && rights.length > 0) {
      node = rights.pop();
    }
  }
  return results;
};

/*
前序遍历 4 2 1 3 7 6 9
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

console.log(preorderTraversal(root));
console.log(preorderTraversal(null));
