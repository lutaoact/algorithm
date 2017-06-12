'use strict';

/*
447. Number of Boomerangs

Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let N = points.length, map, distanceSquare, pointI, pointJ, count = 0;
  for (let i = 0; i < N; i++) {
    map = {}, pointI = points[i];
    for (let j = 0; j < N; j++) {
      if (i === j) continue;

      pointJ = points[j];
      distanceSquare = distance(pointI, pointJ);

      //对同一距离进行计数
      if (map[distanceSquare]) {
        count += map[distanceSquare] * 2;
        map[distanceSquare]++;
      } else {
        map[distanceSquare] = 1;
      }
    }
  }

  function distance(point1, point2) {
    let dx = point1[0] - point2[0];
    let dy = point1[1] - point2[1]
    return dx * dx + dy * dy;
  }
  return count;
};

console.log(numberOfBoomerangs([[0,0],[1,0],[-1,0],[0,1],[0,-1]]));
//console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]));
