'use strict';

/*
449. Serialize and Deserialize BST

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root === null) return 'n';
  let results = [];
  preOrder(root);
  return results.join(',');

  function preOrder(root) {
    if (root === null) return;
    results.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === 'n') return null;

  let strs = data.split(',');
  return getNode(strs);

  function getNode(queue) {
    if (queue.length === 0) return null;

    let val = Number(queue.shift());
    let root = new TreeNode(val);
    let smallerQueue = [];
    while (queue.length > 0 && queue[0] < val) {
      smallerQueue.push(queue.shift());
    }
    root.left = getNode(smallerQueue);
    root.right = getNode(queue);

    return root;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

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

console.log(serialize(root));
console.log(deserialize(serialize(root)));
