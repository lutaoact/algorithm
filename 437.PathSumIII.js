'use strict';

/*
437. Path Sum III

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (root === null) return 0;
  return findPath(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);

  function findPath(node, sum) {
    if (node === null) return 0;
    return (sum === node.val ? 1 : 0) + findPath(node.left, sum - node.val) + findPath(node.right, sum - node.val);
  }
};

//TODO 进一步研究
pathSum = function(root, sum) {
  if (root === null) return 0;
  let map = {0: 1};
  return backtrack(root, 0, sum, map);

  function backtrack(node, curSum, target, map) {
    if (node === null) return 0;
    curSum += node.val;
    let result = map[curSum - target] || 0;
    map[curSum] = (map[curSum] || 0) + 1;
    result += backtrack(node.left, curSum, target, map) + backtrack(node.right, curSum, target, map);
    map[curSum]--;
    return result;
  }
};

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(-3);
root.right.right = new TreeNode(11);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(2);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.left.right.right = new TreeNode(1);

console.log(pathSum(root, 8));
