'use strict';

/*
508. Most Frequent Subtree Sum

Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.

Examples 1
Input:

  5
 /  \
2   -3
return [2, -3, 4], since all the values happen only once, return all of them in any order.
Examples 2
Input:

  5
 /  \
2   -5
return [2], since 2 happens twice, however -5 only occur once.
Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.
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
var findFrequentTreeSum = function(root) {
  let results = [], maxCount = 0, map = {};
  postOrder(root);
  return results;

  function postOrder(root) {//后续遍历
    if (root === null) return 0;
    let left = postOrder(root.left), right = postOrder(root.right);

    let sum = left + right + root.val;
    if (!map[sum]) map[sum] = 1;
    else map[sum]++;

    if (map[sum] > maxCount) {
      maxCount = map[sum];
      results = [sum];
    } else if (map[sum] === maxCount) {
      results.push(sum);
    }
    return sum;
  }
};

let root = new TreeNode(5);
root.left = new TreeNode(2);
root.right = new TreeNode(-3);
console.log(findFrequentTreeSum(root));

root = new TreeNode(5);
root.left = new TreeNode(2);
root.left.left = new TreeNode(2);
root.right = new TreeNode(-5);
root.right.left = new TreeNode(-5);
root.right.right = new TreeNode(-5);
console.log(findFrequentTreeSum(root));
