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
 * @return {boolean}
 */
// 递归方法中序遍历
var findTarget = function(root, k) {
  let map = {};
  return traverse(root);

  // 非递归方法中序遍历
  function traverse(node) {
    if (node === null) return false;
    if (traverse(node.left)) return true;

    if (map[node.val]) return true;
    map[k - node.val] = true;

    if (traverse(node.right)) return true;

    return false;
  }
};

// 非递归方法中序遍历
findTarget2 = function(root, k) {
  if (root === null) return false;
  let node = root, stacks = [], map = {};
  while (node || stacks.length > 0) {
    if (node) {
      stacks.push(node);
      node = node.left;
    } else {
      node = stacks.pop();

      if (map[node.val]) return true;
      map[k - node.val] = true;

      node = node.right;
    }
  }
  return false;
};

findTarget = findTarget2;

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);
console.log(findTarget(root, 9));
console.log(findTarget(root, 28));
