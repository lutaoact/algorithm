/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  // xy: 只要grid[i][j] 非0，面积即增加1
  // xz: 固定每个x，分别在y的方向上取最大值
  // yz: 固定每个y，分别在x的方向上取最大值

  let result = 0, N = grid.length;
  // xy xz
  for (let i = 0; i < N; i++) {
    let max = 0;
    for (let j = 0; j < N; j++) {
      if (grid[i][j] > max) max = grid[i][j];
      if (grid[i][j] > 0) result += 1;
    }
    result += max;
  }

  // yz
  for (let j = 0; j < N; j++) {
    let max = 0;
    for (let i = 0; i < N; i++) {
      if (grid[i][j] > max) max = grid[i][j];
    }
    result += max;
  }
  return result;
};

// 只遍历一次grid
projectionArea = function(grid) {
  let result = 0, N = grid.length;
  let fmax = 0; //save the max num in each row
  let smax = Array(N).fill(0); //save the max num in each column

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] > 0) result += 1;
      if (grid[i][j] > fmax) fmax = grid[i][j];
      if (grid[i][j] > smax[j]) smax[j] = grid[i][j];
      if (i === N - 1) {
        result += smax[j];
      }
    }
    result += fmax;
    fmax = 0;
  }

  return result;
}

let grid;
grid = [[2]];
console.log(projectionArea(grid));

grid = [[1,2],[3,4]];
console.log(projectionArea(grid));

grid = [[1,0],[0,2]];
console.log(projectionArea(grid));

grid = [[1,1,1],[1,0,1],[1,1,1]];
console.log(projectionArea(grid));

grid = [[2,2,2],[2,1,2],[2,2,2]];
console.log(projectionArea(grid));
