/**
 * // Definition for a Node.
 */
function Node(val,children) {
   this.val = val;
   this.children = children;
};
/**
 * @param {Node} root
 * @return {number[][]}
 */
// 广度优先
var levelOrder = function(root) {
  if (root === null) return [];

  let queue = [root], results = [];
  while (queue.length > 0) {
    let N = queue.length, oneLevel = Array(N);
    for (let i = 0; i < N; i++) {
      let node = queue.shift();
      oneLevel[i] = node.val;
      if (node.children && node.children.length > 0) {
        for (let j = 0; j < node.children.length; j++) {
          queue.push(node.children[j]);
        }
      }
    }
    results.push(oneLevel);
  }
  return results;
};

// 深度优先
var levelOrder2 = function(root) {
  let results = [];
  dfs(root, 0);
  return results;

  function dfs(node, level) {
    if (node === null) return;
    if (results.length === level) results.push([]);

    results[level].push(node.val);

    if (node.children && node.children.length > 0) {
      let nextLevel = level + 1;
      for (let j = 0; j < node.children.length; j++) {
        dfs(node.children[j], nextLevel);
      }
    }
  }
};

let node1 = new Node(5, []);
let node2 = new Node(6, []);
let node3 = new Node(3, [node1, node2]);
let node4 = new Node(2, []);
let node5 = new Node(4, []);
let node6 = new Node(1, [node3, node4, node5]);
console.log(levelOrder(node6));

console.log(levelOrder2(node6));
