'use strict';

/*
235. Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let map = {};
  buildAncestorMap(root, map);//构造祖先map

  let ancestors = {};
  let v = p.val, vv = q.val;
  ancestors[v] = v;
  while (map[v] !== undefined) {
    ancestors[map[v]] = 1;
    v = map[v];
  }

  //如果q节点本身就在祖先列表里，直接返回
  if (ancestors[vv]) {
    return new TreeNode(vv);
  }

  while (map[vv] !== undefined) {
    if (ancestors[vv]) return new TreeNode(vv);
    vv = map[vv];
  }

  return root;

  function buildAncestorMap(root, map) {
    if (root === null) return;
    if (root.left !== null) {
      map[root.left.val] = root.val;
      buildAncestorMap(root.left, map);
    }
    if (root.right !== null) {
      map[root.right.val] = root.val;
      buildAncestorMap(root.right, map);
    }
  }
};

//检查p和q是否在root的同一边，如果在同一边，那共同祖先一定出现左子树或右子树中
lowestCommonAncestor = function(root, p, q) {
  while ((root.val - p.val) * (root.val - q.val) > 0) {
    root = root.val > p.val ? root.left : root.right;
  }
  return root;
};

//直接比较来确定
lowestCommonAncestor = function(root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
};

let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);

root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);

root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);

//console.log(lowestCommonAncestor(root, new TreeNode(2), new TreeNode(8)));
//console.log(lowestCommonAncestor(root, new TreeNode(2), new TreeNode(4)));
//console.log(lowestCommonAncestor(root, new TreeNode(4), new TreeNode(2)));
console.log(lowestCommonAncestor(root, new TreeNode(5), new TreeNode(9)));
