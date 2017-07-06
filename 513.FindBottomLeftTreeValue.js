'use strict';

/*
513. Find Bottom Left Tree Value

Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2:
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL.
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
//层优先遍历，每一层从右向左依次将元素入队，然后再出队，最后出队的那个元素就是底层的最左元素
var findBottomLeftValue = function(root) {
  let node = root, queue = [node];
  while (queue.length > 0) {
    node = queue.shift();
    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }
  return node.val;
};

let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
console.log(findBottomLeftValue(root));

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
console.log(findBottomLeftValue(root));
