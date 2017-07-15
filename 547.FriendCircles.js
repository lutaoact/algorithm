'use strict';

/*
547. Friend Circles

There are N students in a class. Some of them are friends, while some are not. Their friendship is transitive in nature. For example, if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C. And we defined a friend circle is a group of students who are direct or indirect friends.

Given a N*N matrix M representing the friend relationship between students in the class. If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not. And you have to output the total number of friend circles among all the students.

Example 1:
Input:
[[1,1,0],
 [1,1,0],
 [0,0,1]]
Output: 2
Explanation:The 0th and 1st students are direct friends, so they are in a friend circle.
The 2nd student himself is in a friend circle. So return 2.
Example 2:
Input:
[[1,1,0],
 [1,1,1],
 [0,1,1]]
Output: 1
Explanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends,
so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.
Note:
N is in range [1,200].
M[i][i] = 1 for all students.
If M[i][j] = 1, then M[j][i] = 1.
*/

/**
 * @param {number[][]} M
 * @return {number}
 */
//这是一个无向图求连通分量的问题
var findCircleNum = function(M) {
  let N = M.length, marked = Array(N), count = 0;
  for (let i = 0; i < N; i++) {
    if (!marked[i]) {
      dfs(M, i);
      count++;
    }
  }
  return count;

  function dfs(M, row) {//深度优先遍历
    marked[row] = true;
    for (let j = 0; j < N; j++) {
      if (M[row][j] === 1 && !marked[j]) {
        dfs(M, j);
      }
    }
  }
};

let M = [
 [1,1,0],
 [1,1,0],
 [0,0,1],
];
console.log(findCircleNum(M));

M = [
 [1,1,0],
 [1,1,1],
 [0,1,1],
];
console.log(findCircleNum(M));

M = [
 [1,1,0,0],
 [1,1,1,0],
 [0,1,1,0],
 [0,0,0,1],
];
console.log(findCircleNum(M));
