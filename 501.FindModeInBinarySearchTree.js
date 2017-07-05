'use strict';

/*
501. Find Mode in Binary Search Tree
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
For example:
Given BST [1,null,2,2],
   1
    \
     2
    /
   2
return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
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
var findMode = function(root) {
  let curCount = 0, maxCount = 0, modeCount = 0, curVal = null, modes = null;
  inOrder(root);
  modes = Array(modeCount);
  modeCount = 0;
  curCount = 0;
  inOrder(root);
  return modes;

  function handleVal(val) {
    if (curVal !== val) {
      curVal = val;
      curCount = 0;
    }
    curCount++;

    if (curCount > maxCount) {
      maxCount = curCount;
      modeCount = 1;
    } else if (curCount === maxCount) {
      if (modes !== null) modes[modeCount] = curVal;
      modeCount++;
    }
  }

  function inOrder(root) {
    if (root === null) return;
    inOrder(root.left);
    handleVal(root.val);
    inOrder(root.right);
  }
};

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(9);

console.log(findMode(root));
