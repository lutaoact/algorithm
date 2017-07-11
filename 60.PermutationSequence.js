'use strict';

/*
60. Permutation Sequence

The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
//康托编码 http://blog.csdn.net/synapse7/article/details/16901489
var getPermutation = function(n, k) {
  let fac = Array(n);
  fac[0] = 1;
  for (let i = 1; i < n; i++) {
    fac[i] = i * fac[i - 1];
  }

  let ans = Array(n), visited = Array(n + 1), t;
  k--;
  for (let i = 0; i < n; i++) {
    t = k / fac[n - 1 - i] | 0;
    let j;
    for (j = 1; j <= n; j++) {
      if (!visited[j]) {
        if (t === 0) break;
        t--;
      }
    }
    k = k % fac[n - 1 - i];
    ans[i] = j, visited[j] = true;
  }
  return ans.join('');
};

console.log(getPermutation(3, 5));
console.log(getPermutation(1, 1));
console.log(getPermutation(5, 16));
