'use strict';

/*
623. Add One Row to Tree

Given the root of a binary tree, then value v and depth d, you need to add a row of nodes with value v at the given depth d. The root node is at depth 1.

The adding rule is: given a positive integer depth d, for each NOT null tree nodes N in depth d-1, create two tree nodes with value v as N's left subtree root and right subtree root. And N's original left subtree should be the left subtree of the new left subtree root, its original right subtree should be the right subtree of the new right subtree root. If depth d is 1 that means there is no depth d-1 at all, then create a tree node with value v as the new root of the whole original tree, and the original tree is the new root's left subtree.

Example 1:
Input:
A binary tree as following:
       4
     /   \
    2     6
   / \   /
  3   1 5

v = 1

d = 2

Output:
       4
      / \
     1   1
    /     \
   2       6
  / \     /
 3   1   5

Example 2:
Input:
A binary tree as following:
      4
     /
    2
   / \
  3   1

v = 1

d = 3

Output:
      4
     /
    2
   / \
  1   1
 /     \
3       1
Note:
The given d is in range [1, maximum depth of the given tree + 1].
The given binary tree has at least one tree node.
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
//层优先遍历
var addOneRow = function(root, v, d) {
  if (d === 1) {
    let node = new TreeNode(v);
    node.left = root;
    return node;
  }

  let depth = 1, queue = [root];
  while (depth < d - 1) {
    for (let i = 0, N = queue.length; i < N; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }

  let node;
  while (queue.length > 0) {
    node = queue.shift();
    let left = node.left, right = node.right;
    node.left = new TreeNode(v);
    node.right = new TreeNode(v);
    node.left.left = left;
    node.right.right = right;
  }
  return root;
};

//递归方案
addOneRow = function(root, v, d) {
  if (d === 1) {
    let node = new TreeNode(v);
    node.left = root;
    return node;
  }
  helper(root, 1, v, d);
  return root;

  //递归，深度优先遍历
  function helper(node, depth, v, d) {
    if (node === null) return;
    if (depth < d - 1) {
      helper(node.left, depth + 1, v, d);
      helper(node.right, depth + 1, v, d);
      return;
    }

    //depth === d - 1
    let left = node.left, right = node.right;
    node.left = new TreeNode(v);
    node.right = new TreeNode(v);
    node.left.left = left;
    node.right.right = right;
  }
};

let root;
root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(1);
root.right.left = new TreeNode(5);
console.log(addOneRow(root, 1, 3));

root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(1);
console.log(addOneRow(root, 1, 3));
