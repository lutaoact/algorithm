'use strict';

/*
515. Find Largest Value in Each Tree Row

You need to find the largest value in each row of a binary tree.

Example:
Input:

          1
         / \
        3   2
       / \   \
      5   3   9

Output: [1, 3, 9]
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
//广度优先遍历
var largestValues = function(root) {
  if (root === null) return [];

  let queue = [root], results = [];
  while (queue.length > 0) {
    let N = queue.length, node = queue.shift(), max = node.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    for (let i = 0; i < N - 1; i++) {
      node = queue.shift();
      if (node.val > max) max = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    results.push(max);
  }
  return results;
};

//深度优先遍历
largestValues = function(root) {
  let results = [];
  dfs(root, results, 0);
  return results;

  function dfs(root, results, depth) {
    if (root === null) return;
    if (results.length === depth) {
      results.push(root.val);
    } else {
      results[depth] = Math.max(root.val, results[depth]);
    }

    dfs(root.left, results, depth + 1);
    dfs(root.right, results, depth + 1);
  }
};

let root = null;
console.log(largestValues(root));
root = new TreeNode(1);
console.log(largestValues(root));
root.left = new TreeNode(3);
root.right = new TreeNode(2);
console.log(largestValues(root));
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9);

console.log(largestValues(root));
