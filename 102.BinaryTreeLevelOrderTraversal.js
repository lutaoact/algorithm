'use strict';

/*
102. Binary Tree Level Order Traversal

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */
//广度优先
var levelOrder = function(root) {
  if (root === null) return [];
  let queue = [root], results = [];
  while (queue.length > 0) {
    let N = queue.length, list = [];
    for (let i = 0; i < N; i++) {
      let node = queue.shift();
      list.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    results.push(list);
  }
  return results;
};

//深度优先
levelOrder = function(root) {
  let results = [];
  dfs(root, 0);
  return results;

  function dfs(root, level) {
    if (root === null) return;

    if (results.length === level) results.push([]);
    results[level].push(root.val);
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(levelOrder(root));
