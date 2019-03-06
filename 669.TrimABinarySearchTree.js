/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (root === null) return null;

  if (root.val >= L && root.val <= R) {
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;
  }

  if (root.val < L) {
    return trimBST(root.right, L, R);
  }
  if (root.val > R) {
    return trimBST(root.left, L, R);
  }
};

let root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(2);
console.log(trimBST(root, 1, 2));

root = new TreeNode(3);
root.left = new TreeNode(0);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(1);
console.log(trimBST(root, 1, 3));
