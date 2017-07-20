'use strict';

/*
145. Binary Tree Postorder Traversal

Given a binary tree, return the postorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [3,2,1].

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
var postorderTraversal = function(root) {
  let node = root, results = [], stack = [];//results是一个双端队列，因为我们需要从头部插入
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      results.unshift(node.val);//从头上插入 Reverse the process of preorder
      node = node.right;// Reverse the process of preorder
    } else {
      node = stack.pop();
      node = node.left;// Reverse the process of preorder
    }
  }
  return results;
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

console.log(postorderTraversal(root));// 1 3 2 6 9 7 4
