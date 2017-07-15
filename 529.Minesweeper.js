'use strict';

/*
529. Minesweeper

Let's play the minesweeper game (Wikipedia, online game)!

You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:

If a mine ('M') is revealed, then the game is over - change it to 'X'.
If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.
If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
Return the board when no more squares will be revealed.
Example 1:
Input:

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

Output:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

Example 2:
Input:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

Output:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

Note:
The range of the input matrix's height and width is [1,50].
The click position will only be an unrevealed square ('M' or 'E'), which also means the input board contains at least one clickable square.
The input board won't be a stage when game is over (some mines have been revealed).
For simplicity, not mentioned rules should be ignored in this problem. For example, you don't need to reveal all the unrevealed mines when the game is over, consider any cases that you will win the game or flag any squares.
*/

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
//主要的逻辑如下：
//首先取指定格子的邻接格子，也就是周围的那8个格子，顶点处的格子只有3个邻接格子，边上的只有5个。
//统计邻接格子里面M的个数mineCount，如果为0，就把当前格子标为B，并把所有的邻接格子加入队列；如果不为0，当前格子标为mineCount，结束
//要注意，已经揭开的格子，在处理的时候要直接跳过，不需要再加入到队列中，否则队列就永远都处理不完了
var updateBoard = function(board, click) {
  let [row, col] = click;
  if (board[row][col] === 'M') {//直接踩到雷
    board[row][col] = 'X';
    return board;
  }

  let RN = board.length, CN = board[0].length, revealed = Array(RN * CN), queue = [];

  queue.push(click);
  while (queue.length > 0) {
    [row, col] = queue.shift();
    let position = row * CN + col;//转成一维数组的索引

    if (revealed[position]) continue;//如果这个格子已经被揭开了，直接跳过

    let adjacents = adjacent(row, col);//所有的邻接格子
    let mineCount = 0, listE = [];
    adjacents.forEach(function(rc) {//统计邻接格子中有几个M，几个E
      let [tmprow, tmpcol] = rc;
      if (revealed[tmprow * CN + tmpcol]) return;

      if (board[tmprow][tmpcol] === 'M') {
        mineCount++;
      } else if (board[tmprow][tmpcol] === 'E') {
        listE.push([tmprow, tmpcol]);
      }
    });

    if (mineCount === 0) {//只有M的个数为0时，才将邻接的E都放入队列继续处理
      board[row][col] = 'B';
      queue.push(...listE);
    } else {//否则这个格子就会标为M的个数，停止进一步向外扩展
      board[row][col] = '' + mineCount;
    }

    revealed[position] = true;//已经揭开的格子，做好标记
  }
  return board;

  //计算邻接格子的索引对
  function adjacent(row, col) {
    let results = [], r, c;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        r = row + i, c = col + j;
        if (r >= 0 && r <= RN - 1 && c >= 0 && c <= CN - 1) {
          results.push([r, c]);
        }
      }
    }
    return results;
  }
};

let board = [
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
];
console.log(updateBoard(board, [3, 0]));
console.log(updateBoard(updateBoard(board, [3, 0]), [1, 2]));
