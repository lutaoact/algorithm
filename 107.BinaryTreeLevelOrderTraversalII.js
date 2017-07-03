'use strict';

/*
107. Binary Tree Level Order Traversal II

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
//深度优先遍历
var levelOrderBottom = function(root) {
  let results = [];
  build(results, root, 0);
  return results;

  function build(results, root, level) {
    if (root === null) return;
    if (level >= results.length) results.unshift([]);//每往下走一层，在前面添加一个空数组，用来放置新层中的数据
    build(results, root.left, level + 1);
    build(results, root.right, level + 1);

    results[results.length - level - 1].push(root.val);
  }
};

//广度优先遍历
levelOrderBottom = function(root) {
  let results = [], queue = [];
  if (root === null) return results;

  queue.push(root);
  while (queue.length > 0) {
    let num = queue.length, list = [];
    for (let i = 0; i < num; i++) {
      let node = queue.shift();
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
      list.push(node.val);
    }
    results.unshift(list);
  }
  return results;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(levelOrderBottom(root));
