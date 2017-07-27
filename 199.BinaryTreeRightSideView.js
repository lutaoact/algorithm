'use strict';

/*
199. Binary Tree Right Side View

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].
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
//典型的层优先遍历
var rightSideView = function(root) {
  if (root === null) return [];

  let queue = [root], results = [];
  while (queue.length > 0) {
    let N = queue.length, node;
    for (let i = 0; i < N; i++) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    results.push(node.val);
  }
  return results;
};

//深度优先遍历
rightSideView = function(root) {
  let results = [];
  dfs(root, results, 0);
  return results;

  function dfs(root, results, depth) {
    if (root === null) return;
    if (results.length === depth) results.push(root.val);

    //先遍历右子树，如果存在节点，就会直接放入数组，如果不存在，就会从左子树找
    dfs(root.right, results, depth + 1);
    dfs(root.left, results, depth + 1);
  }
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
console.log(rightSideView(root));
