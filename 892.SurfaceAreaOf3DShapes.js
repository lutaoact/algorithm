/**
 * @param {number[][]} grid
 * @return {number}
 */
// 核心是计算每个cube跟前一个cube的高度差异，高度起伏可以想象为从0开始，最后又变回0，先上，后下，可能会重复多次这样的过程
var surfaceArea = function(grid) {
  // x 表示在x值不变的方向上的面积
  // y 表示在y值不变的方向上的面积
  let N = grid.length, top = 0, x = 0, y = 0;
  for (let i = 0; i < N; i++) {
    let currX = 0, currY = 0; //initial no cube on top of cell
    for (let j = 0; j < N; j++) {
      if (grid[i][j] > 0) top++;

      x += Math.abs(currX - grid[i][j]);
      y += Math.abs(currY - grid[j][i]);
      currX = grid[i][j];
      currY = grid[j][i];
    }
    x += currX;
    y += currY;
  }
  return top * 2 + x + y;
};

let grid = [[2]];
console.log(surfaceArea(grid));

grid = [[1,2],[3,4]];
console.log(surfaceArea(grid));

grid = [[1,0],[0,2]];
console.log(surfaceArea(grid));

grid = [[1,1,1],[1,0,1],[1,1,1]];
console.log(surfaceArea(grid));

grid = [[2,2,2],[2,1,2],[2,2,2]];
console.log(surfaceArea(grid));
