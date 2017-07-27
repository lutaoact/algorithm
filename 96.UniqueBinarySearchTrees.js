'use strict';

/*
96. Unique Binary Search Trees

Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,
Given n = 3, there are a total of 5 unique BST's.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

//参考：https://leetcode.com/problems/unique-binary-search-trees/tabs/discuss

/**
 * @param {number} n
 * @return {number}
 */
//G(n)  表示n个节点的树最多有多少种构造方法，这个问题可以分解节点1..n分别作为根节点可以产生的构造方法数量加和
//F(i,n)表示以i为root，节点总数为n的树总共有多少种构造方法
//于是我们得到了两个相互递归的函数，可以求解，但会很慢，因为这里面包含了很多重复计算，改进方法就是缓存中间结果（参考第2个方法）
var numTrees = function(n) {
  return G(n);

  function G(n) {//表示n个节点最多有多少种构造
    if (n <= 1) return 1;

    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += F(i, n);
    }
    return result;
  }

  function F(i, n) {//表示以i为root的树，包含n个节点共有多少种构造方法
    return G(i - 1) * G(n - i);//i将所有节点分成两部分，i-1个节点位于左树，n-i个节点位于右树，构造方法数量的乘积
  }
};

numTrees = function(n) {
  let cache = Array(n + 1);
  cache[0] = cache[1] = 1;

  G(n);

  return cache[n];

  function G(n) {
    if (cache[n]) return cache[n];

    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += F(i, n);
    }
    cache[n] = result;
    console.log(result);
    return result;
  }

  function F(i, n) {
    return G(i - 1) * G(n - i);
  }
};

//动态规划
numTrees = function(n) {
  let G = Array(n + 1).fill(0);
  G[0] = G[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
};

console.log(numTrees(3));//5
console.log(numTrees(4));//14
