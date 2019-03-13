/**
 * @param {character[][]} grid
 * @return {number}
 */
// 连通标记
var numIslands = function(grid) {
  if (grid.length === 0) return 0;

  let M = grid.length, N = grid[0].length, visited = Array(M), d = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for (let i = 0; i < M; i++) {
    visited[i] = Array(N);
  }

  let result = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        result++;
        backtrack(i, j);
      }
    }
  }
  return result;

  function backtrack(x, y) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let newx = x + d[i][0], newy = y + d[i][1];
      if (inArea(newx, newy) && !visited[newx][newy] && grid[newx][newy] === '1') {
        backtrack(newx, newy);
      }
    }
  }

  function inArea(x, y) {
    return x >= 0 && x < M && y >= 0 && y < N;
  }
};

// 缩小空间复杂度
numIslands2 = function(grid) {
  if (grid.length === 0) return 0;

  let M = grid.length, N = grid[0].length, d = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  let result = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === '1') {
        result++;
        dfs(i, j);
      }
    }
  }
  return result;

  function dfs(x, y) {
    grid[x][y] = '*';
    for (let i = 0; i < 4; i++) {
      let newx = x + d[i][0], newy = y + d[i][1];
      if (inArea(newx, newy) && grid[newx][newy] === '1') {
        dfs(newx, newy);
      }
    }
  }

  function inArea(x, y) {
    return x >= 0 && x < M && y >= 0 && y < N;
  }
};

numIslands = numIslands2;

let grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
console.log(numIslands(grid));

grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];
console.log(numIslands(grid));
