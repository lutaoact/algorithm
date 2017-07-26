'use strict';

/*
386. Lexicographical Numbers

Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  if (n <= 0) return [];

  let results = Array(n), index = 0;
  for (let i = 1; i <= 9; i++) {
    if (i > n) break;
    results[index++] = i;
    dfs(i);
  }
  return results;

  //深度优先
  function dfs(prefix) {
    for (let i = 0; i <= 9; i++) {
      let num = prefix * 10 + i;
      if (num > n) break;
      results[index++] = num;
      dfs(num);
    }
  }
};

for (let i = 0; i <= 100; i++) {
  console.log(lexicalOrder(i));
}
//let results = lexicalOrder(5000000);
//for (let i = 0; i < 5000000; i++) {
//  console.log(results[i]);
//}
