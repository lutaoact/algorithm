/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length === 0) return;

  let M = board.length, N = board[0].length, d = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for (let i = 0; i < N; i++) {
    if (board[0][i] === 'O') {
      dfs(0, i);
    }
    if (board[M - 1][i] === 'O') {
      dfs(M - 1, i);
    }
  }

  for (let i = 1; i < M - 1; i++) {
    if (board[i][0] === 'O') {
      dfs(i, 0);
    }
    if (board[i][N - 1] === 'O') {
      dfs(i, N - 1);
    }
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === '*') {
        board[i][j] = 'O';
      }
    }
  }

  function dfs(x, y) {
    board[x][y] = '*';
    for (let i = 0; i < 4; i++) {
      let newx = x + d[i][0], newy = y + d[i][1];
      if (inArea(newx, newy) && board[newx][newy] === 'O') {
        dfs(newx, newy)
      }
    }
  }

  function inArea(x, y) {
    return x >= 0 && x < M && y >= 0 && y < N;
  }
};

let board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];
//solve(board);
//console.log(board);

board = [["X","O","X"],["O","X","O"],["X","O","X"]];
solve(board);
console.log(board);
