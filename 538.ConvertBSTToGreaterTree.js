/*
538. Convert BST to Greater Tree
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let node = root, sum = 0, stacks = [];
  while (node || stacks.length > 0) {
    if (node) {
      stacks.push(node);
      node = node.left;
    } else {
      node = stacks.pop();
      sum += node.val;
      node = node.right;
    }
  }

  node = root;
  while (node || stacks.length > 0) {
    if (node) {
      stacks.push(node);
      node = node.left;
    } else {
      node = stacks.pop();
      sum -= node.val;
      node.val += sum;
      node = node.right;
    }
  }

  return root;
};

let root = new TreeNode(5);
root.left = new TreeNode(2);
root.right = new TreeNode(13);
console.log(convertBST(root));
