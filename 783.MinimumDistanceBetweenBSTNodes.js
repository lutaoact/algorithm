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
var minDiffInBST = function(root) {
  let node = root, stacks = [], min = Infinity, prev = Infinity;
  while (node || stacks.length > 0) {
    if (node) {
      stacks.push(node);
      node = node.left;
    } else {
      node = stacks.pop();
      if (prev !== Infinity) {
        let diff = node.val - prev;
        if (diff === 1) return 1; //都是整数，并且值也不相同，那最小值一定是1
        if (diff < min) min = diff;
      }
      prev = node.val;
      node = node.right;
    }
  }
  return min;
};

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(7);
root.right = new TreeNode(15);
console.log(minDiffInBST(root));
