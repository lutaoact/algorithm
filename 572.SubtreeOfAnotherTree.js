'use strict';

/*
572. Subtree of Another Tree

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (s === null && t === null) return true;
  if (s === null || t === null) return false;
  if (s.val === t.val && isEqual(s.left, t.left) && isEqual(s.right, t.right)) {
    return true;
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t);

  function isEqual(t1, t2) {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;

    return t1.val === t2.val && isEqual(t1.left, t2.left) && isEqual(t1.right, t2.right);
  }
};

isSubtree = function(s, t) {
  if (s === null) return false;
  if (isEqual(s, t)) return true;

  return isSubtree(s.left, t) || isSubtree(s.right, t);

  function isEqual(t1, t2) {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;

    return t1.val === t2.val && isEqual(t1.left, t2.left) && isEqual(t1.right, t2.right);
  }
};

let s = new TreeNode(3);
s.left = new TreeNode(4);
s.right = new TreeNode(5);
s.left.left = new TreeNode(1);
s.left.right = new TreeNode(2);
s.left.right.left = new TreeNode(0);

let t = new TreeNode(4);
t.left = new TreeNode(1);
t.right = new TreeNode(2);

console.log(isSubtree(s, t));
