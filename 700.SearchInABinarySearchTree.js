/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root === null) return null;
  if (root.val === val) return root;
  if (root.val < val) return searchBST(root.right, val);
  if (root.val > val) return searchBST(root.left, val);
};

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
console.log(searchBST(root, 3));
