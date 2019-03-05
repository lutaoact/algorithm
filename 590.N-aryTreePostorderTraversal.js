/**
 * // Definition for a Node.
 */
function Node(val,children) {
   this.val = val;
   this.children = children;
};

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  let node = root, results = [], stacks = [];
  while (node) {
    results.unshift(node.val);
    if (node.children && node.children.length > 0) {
      for (let i = 0; i < node.children.length - 1; i++) {
        stacks.push(node.children[i]);
      }
      node = node.children[node.children.length - 1];
      continue;
    }

    if (stacks.length > 0) {
      node = stacks.pop();
      continue;
    }

    node = null;
  }
  return results;
};

let node1 = new Node(5, []);
let node2 = new Node(6, []);
let node3 = new Node(3, [node1, node2]);
let node4 = new Node(2, []);
let node5 = new Node(4, []);
let node6 = new Node(1, [node3, node4, node5]);
console.log(postorder(node6));
