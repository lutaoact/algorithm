/*
993. Cousins in Binary Tree
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

Example 1:

Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:

Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:

Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false

Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let queue = [[root, 0]], marks = Array(101), depth = 0;
  while (queue.length > 0) {
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let ele = queue.shift();
      marks[ele[0].val] = [depth, ele[1]];

      if (ele[0].left) queue.push([ele[0].left, ele[0].val]);
      if (ele[0].right) queue.push([ele[0].right, ele[0].val]);
    }
    depth++;
  }
  return marks[x][0] === marks[y][0] && marks[x][1] !== marks[y][1];
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);
console.log(isCousins(root, 4, 5));
