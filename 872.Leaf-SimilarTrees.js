/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let results1 = [], results2 = [];
  dfs(root1, results1);
  dfs(root2, results2);
  let M = results1.length, N = results2.length;
  if (M !== N) return false;

  for (let i = 0; i < M; i++) {
    if (results1[i] !== results2[i]) return false;
  }
  return true;

  function dfs(node, results) {
    if (node.left === null && node.right === null) {
      results.push(node.val);
      return;
    }
    if (node.left !== null) dfs(node.left, results)
    if (node.right !== null) dfs(node.right, results)
  }
};

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

root1 = root2 = root;
console.log(leafSimilar(root1, root2));
