/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (board.length === 0) return false;
  if (board[0].length === 0) return false;

  let M = board.length, N = board[0].length, visited = Array(M), d = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  //初始化visited数组
  for (let i = 0; i < M; i++) {
    visited[i] = Array(N);
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (backtrack(0, i, j)) {
        return true;
      }
    }
  }
  return false;

  function inArea(x, y) {
    return x >= 0 && x < M && y >= 0 && y < N;
  }

  function backtrack(index, x, y) {
    if (index === word.length - 1) return word[index] === board[x][y];
    if (board[x][y] !== word[index]) return false;

    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let newx = x + d[i][0], newy = y + d[i][1];
      if (inArea(newx, newy) && !visited[newx][newy]) {
        if (backtrack(index + 1, newx, newy)) {
          return true;
        }
      }
    }
    visited[x][y] = false;
    return false;
  }
};

let board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
], word;
word = "ABCCED";
console.log(exist(board, word));

word = "SEE";
console.log(exist(board, word));

word = "ABCB";
console.log(exist(board, word));
