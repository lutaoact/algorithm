'use strict';

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/*
     4
   /   \
  2     7
 / \   / \
1   3 6   9
*/

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

function postOrder(root) {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}
//postOrder(root);// 1 3 2 6 9 7 4

//前序遍历：中-左-右
//后序遍历：左-右-中
//所以我们可以按照前序遍历的思路将代码略作修改得到：中-右-左
//那么后续遍历就是这个结果的倒序，当然我们也可以直接倒着插入数组，即unshift操作
function postOrderIteratively(root) {
  let node = root, results = [], stack = [];//results是一个双端队列
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      results.unshift(node.val);//从头上插入 Reverse the process of preorder
      node = node.right;// Reverse the process of preorder
    } else {
      node = stack.pop();
      node = node.left;// Reverse the process of preorder
    }
  }
  return results;
}
console.log(postOrderIteratively(root));//1 3 2 6 9 7 4

function preOrder(root) {
  if (root === null) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}
//preOrder(root);// 4 2 1 3 7 6 9

function inOrder(root) {
  if (root === null) return;
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}
//inOrder(root);// 1 2 3 4 6 7 9

function preOrderIteratively1(root) {
  if (root === null) return [];
  let results = [], stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    results.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return results;
};

function preOrderIteratively2(root) {
  let node = root, results = [], rights = [];//rights为存储右子树的栈
  while (node) {
    results.push(node.val);
    if (node.right) {
      rights.push(node.right);
    }
    node = node.left;
    if (node === null && rights.length > 0) {
      node = rights.pop();
    }
  }
  return results;
};// 4 2 1 3 7 6 9

function preOrderIteratively3(root) {
  let node = root, results = [], stack = [];
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      results.push(node.val);//Add before going to children
      node = node.left;
    } else {
      node = stack.pop();
      node = node.right;
    }
  }
  return results;
};// 4 2 1 3 7 6 9
//console.log(preOrderIteratively3(root));

function inOrderIteratively(root) {
  let node = root, stack = [], results = [];
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      results.push(node.val);//Add before all left children
      node = node.right;
    }
  }
  return results;
}// 1 2 3 4 6 7 9
//console.log(inOrderIteratively(null));

//prev代表前驱结点
function inOrderMorris(root) {
  let results = [], cur = root, prev = null;
  while (cur) {
    if (cur.left === null) {
      results.push(cur.val);
      cur = cur.right;
    } else {
      //查找前驱结点：左子树中的最右叶子
      prev = cur.left;
      while (prev.right !== null && prev.right !== cur) {
        prev = prev.right;
      }

      if (prev.right === null) {
        prev.right = cur;
        cur = cur.left;
      } else {
        prev.right = null;
        results.push(cur.val);
        cur = cur.right;
      }
    }
  }
  return results;
}
//console.log(inOrderMorris(root));

//prev代表前驱结点 前序遍历与中序遍历相似，代码上只有一行不同，不同就在于输出的顺序。
function preOrderMorris(root) {
  let results = [], cur = root, prev = null;
  while (cur) {
    if (cur.left === null) {
      results.push(cur.val);
      cur = cur.right;
    } else {
      prev = cur.left;
      while (prev.right !== null && prev.right !== cur) {
        prev = prev.right;
      }

      if (prev.right === null) {
        prev.right = cur;
        results.push(cur.val);//the only difference with inorder-traversal
        cur = cur.left;
      } else {
        prev.right = null;
        cur = cur.right;
      }
    }
  }
  return results;
}
//console.log(preOrderMorris(root));// 4 2 1 3 7 6 9
