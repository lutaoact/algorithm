'use strict';

/*
257. Binary Tree Paths

Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
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
 * @return {string[]}
 */
//这个感觉有点慢，每次都要重新复制一遍数组
var binaryTreePaths = function(root) {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [ '' + root.val ];

  let left = binaryTreePaths(root.left);
  let right = binaryTreePaths(root.right);
  let i = 0, j = 0, k = 0, lN = left.length, rN = right.length, results = Array(lN + rN);
  while (i < lN) results[k++] = root.val + '->' + left[i++];
  while (j < rN) results[k++] = root.val + '->' + right[j++];

  return results;
};

binaryTreePaths = function(root) {
  if (root === null) return [];
  let results = [];
  searchBT(root, '', results);

  return results;

  function searchBT(root, prefix, results) {
    if (root === null) return;
    if (root.left === null && root.right === null) return results.push(prefix + root.val);
    searchBT(root.left, prefix + root.val + '->', results);
    searchBT(root.right, prefix + root.val + '->', results);
  }
};

binaryTreePaths = function(root) {
  if (root === null) return [];
  let results = [];
  searchBT(root, [], results);

  return results.map(r => r.join('->'));

  function searchBT(root, paths, results) {
    if (root === null) return;

    paths = paths.concat(root.val);
    if (root.left === null && root.right === null) return results.push(paths);

    searchBT(root.left, paths, results);
    searchBT(root.right, paths, results);
  }
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(binaryTreePaths(root));
