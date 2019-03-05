/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  function equalToRoot(val, root) {
    if (root === null) return true;
    return val === root.val && equalToRoot(val, root.left) && equalToRoot(val, root.right);
  }

  if (root === null) return true;

  let val = root.val;
  return equalToRoot(val, root.left) && equalToRoot(val, root.right);
};

let root = new TreeNode(1);
root.left = new TreeNode(1);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.right = new TreeNode(1);
console.log(isUnivalTree(root));

root = new TreeNode(1);
root.left = new TreeNode(1);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.right = new TreeNode(2);
console.log(isUnivalTree(root));
