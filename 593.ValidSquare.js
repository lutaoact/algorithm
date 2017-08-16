'use strict';

/*
593. Valid Square

Given the coordinates of four points in 2D space, return whether the four points could construct a square.

The coordinate (x,y) of a point is represented by an integer array with two integers.

Example:
Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: True
Note:

All the input integers are in the range [-10000, 10000].
A valid square has four equal sides with positive length and four equal angles (90-degree angles).
Input points have no order.
*/

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
//根据正方形的特征来判定，四个点之间的距离只有可能有两个值，也就是边长和对角线的长度
//要格外注意如果4个点两两重合，其实就是一条线段，计算结果也会是2个长度，所以在判定正方形的时候应该排除这种情况
var validSquare = function(p1, p2, p3, p4) {
  let set = new Set([dis(p1, p2), dis(p1, p3), dis(p1, p4), dis(p2, p3), dis(p2, p4), dis(p3, p4)]);
  return !set.has(0) && set.size === 2;

  function dis(p1, p2) {
    let dx = p1[0] - p2[0], dy = p1[1] - p2[1];
    return dx * dx + dy * dy;
  }
};

let p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1];
console.log(validSquare(p1, p2, p3, p4));
