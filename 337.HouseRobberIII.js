'use strict';

/*
337. House Robber III

The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:
     3
    / \
   2   3
    \   \
     3   1
Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:
     3
    / \
   4   5
  / \   \
 1   3   1
Maximum amount of money the thief can rob = 4 + 5 = 9.
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
 * @return {number}
 */
var rob = function(root) {
  let result = subRob(root);
  return Math.max(result[0], result[1]);

  //result[0] root没有被抢，可以拿到的最大值
  //result[1] root被抢，可以拿到的最大值
  function subRob(root) {
    if (root === null) return [0, 0];

    let result = Array(2);
    let left  = subRob(root.left);
    let right = subRob(root.right);

    result[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    result[1] = root.val + left[0] + right[0];

    return result;
  }
};

//太慢 递归 需要计算很多遍
rob = function(root) {
  return Math.max(robExclude(root), robInclude(root));

  function robExclude(root) {
    if (root === null) return 0;
    return rob(root.left) + rob(root.right);
  }

  function robInclude(root) {
    if (root === null) return 0;
    return root.val + robExclude(root.left) + robExclude(root.right);
  }
};

let root = new TreeNode(3);
root.left = new TreeNode(2);
root.left.right = new TreeNode(3);
root.right = new TreeNode(3);
root.right.right = new TreeNode(1);

console.log(rob(root));//7

root = new TreeNode(3);
root.left = new TreeNode(4);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(5);
root.right.right = new TreeNode(1);

console.log(rob(root));//9
