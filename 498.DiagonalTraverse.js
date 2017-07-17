'use strict';

/*
498. Diagonal Traverse

Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Example:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output:  [1,2,4,7,5,3,6,8,9]

Explanation:
https://leetcode.com/problems/diagonal-traverse/#/description

Note:
The total number of elements of the given matrix will not exceed 10,000.
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//遍历指针的移动方向有向上和向下两种，向上的时候：row--; col++;向下的时候row++; col--;
//这是一个非常简洁的方案，但要特别注意边界的处理，其中有一些坑：
//需要注意判断条件的先后顺序，比如在遍历指针在向上移动的时候：判断条件col === N - 1和row === 0是可能同时达到的，如果将后者放在前面，则会执行col++而使col变为N，造成访问越界，正确的情况应该是row++，也就是将遍历指针整体向下移动了一行。同理，遍历指针向下移动的时候，也要注意类似的问题

var findDiagonalOrder = function(matrix) {
  if (!matrix || !matrix[0] || matrix[0].length === 0) return [];

  let M = matrix.length, N = matrix[0].length, MN = M * N, results = Array(MN);
  let row = 0, col = 0;
  for (let i = 0; i < MN; i++) {
    results[i] = matrix[row][col];
    if ((row + col) % 2 === 0) {//moving up
      if      (col === N - 1) { row++; }
      else if (row === 0)     { col++; }
      else                    { row--; col++; }
    } else {                    //moving down
      if      (row === M - 1) { col++; }
      else if (col === 0)     { row++; }
      else                    { row++; col--; }
    }
  }
  return results;
};

let matrix = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];
console.log(findDiagonalOrder(matrix));
console.log(findDiagonalOrder([]));
