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
// 先中序遍历，得到正确顺序的节点列表，然后遍历列表，设置每个节点的左指针为空，右指针指向列表中的下一个节点
// 注意，列表中最后一个节点的左右指针都要置空
var increasingBST = function(root) {
  let node = root, stacks = [], results = [];
  while (node || stacks.length > 0) {
    if (node) {
      stacks.push(node);
      node = node.left;
    } else {
      node = stacks.pop();
      results.push(node);
      node = node.right;
    }
  }
  for (let i = 0; i < results.length - 1; i++) {
    results[i].left = null;
    results[i].right = results[i + 1];
  }
  results[results.length - 1].left = null;
  results[results.length - 1].right = null;

  return results[0];
};

var increasingBST2 = function(root) {
  let node = root, stacks = [], newRoot = null, prev = null;
  while (node || stacks.length > 0) {
    if (node) {
      stacks.push(node);
      node = node.left;
    } else {
      let curr = stacks.pop();
      if (prev === null) {
        newRoot = curr;
      } else {
        prev.right = curr;
      }
      curr.left = null
      prev = curr;
      node = curr.right;
    }
  }
  return newRoot;
};

/*
      5
     / \
    3   6
   / \   \
  2   4   8
 /       / \
1       7   9
*/
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
root.right.right = new TreeNode(8);
root.right.right.left = new TreeNode(7);
root.right.right.right = new TreeNode(9);
//console.log(increasingBST(root));

console.log(increasingBST2(root));
