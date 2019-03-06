/**
 * // Definition for a Node.
 */
function Node(val,children) {
   this.val = val;
   this.children = children;
};

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0;
  if (!root.children || root.children.length === 0) return 1;

  let max = 0;
  for (let i = 0; i < root.children.length; i++) {
    let depth = maxDepth(root.children[i]);
    if (depth > max) max = depth;
  }
  return max + 1;
};

let node1 = new Node(5, []);
let node2 = new Node(6, []);
let node3 = new Node(3, [node1, node2]);
let node4 = new Node(2, []);
let node5 = new Node(4, []);
let node6 = new Node(1, [node3, node4, node5]);
console.log(maxDepth(node6));
