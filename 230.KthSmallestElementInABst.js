'use strict';

/*
230. Kth Smallest Element in a BST

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ? k ? BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let count = countNodes(root.left);
  if (count > k - 1) return kthSmallest(root.left, k);
  if (count < k - 1) return kthSmallest(root.right, k - 1 - count);
  return root.val;

  function countNodes(root) {
    if (root === null) return 0;

    return 1 + countNodes(root.left) + countNodes(root.right);
  }
};

//循环方法 中序遍历 这是三种方法里面最慢的
kthSmallest = function(root, k) {
  let node = root, stack = [];
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      k--;
      if (k === 0) return node.val;
      node = node.right;
    }
  }
};

//递归方法 中序遍历 这是三种方法里面最快的
kthSmallest = function(root, k) {
  let result = null;
  helper(root);
  return result;

  function helper(root) {
    if (root === null) return;

    helper(root.left);//左子树

    //处理根节点
    k--;
    if (k === 0) {
      result = root.val;
      return;
    }

    helper(root.right);//右子树
  }
};

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
console.log(kthSmallest(root, 2));
console.log(kthSmallest(root, 3));
console.log(kthSmallest(root, 7));
