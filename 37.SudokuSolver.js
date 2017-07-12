'use strict';

/*
37. Sudoku Solver

Write a program to solve a Sudoku puzzle by filling the empty cells.

Empty cells are indicated by the character '.'.

You may assume that there will be only one unique solution.

A sudoku puzzle...
[
  ['5', '3', '.', '.', '7', '.', '.', '.', '.' ],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.' ],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.' ],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3' ],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1' ],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6' ],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.' ],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5' ],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9' ],
]

...and its solution numbers marked in red.
[
  [ '5', '3', '4', '6', '7', '8', '9', '1', '2' ],
  [ '6', '7', '2', '1', '9', '5', '3', '4', '8' ],
  [ '1', '9', '8', '3', '4', '2', '5', '6', '7' ],
  [ '8', '5', '9', '7', '6', '1', '4', '2', '3' ],
  [ '4', '2', '6', '8', '5', '3', '7', '9', '1' ],
  [ '7', '1', '3', '9', '2', '4', '8', '5', '6' ],
  [ '9', '6', '1', '5', '3', '7', '2', '8', '4' ],
  [ '2', '8', '7', '4', '1', '9', '6', '3', '5' ],
  [ '3', '4', '5', '2', '8', '6', '1', '7', '9' ],
]
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  solver(board);

  function solver(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== '.') continue;

        for (let k = 1; k <= 9; k++) {
          board[i][j] = '' + k;
          if (isValid(board, i, j, '' + k) && solver(board))
            return true;
          board[i][j] = '.';
        }
        return false;
      }
    }
    return true;
  }

  function isValid(board, row, col, c) {
    let tmprow, tmpcol;
    for (let i = 0; i < 9; i++) {
      if (i !== col && board[row][i] === c) return false;
      if (i !== row && board[i][col] === c) return false;

      tmprow = ~~(row / 3) * 3 + ~~(i / 3);//注意取行和列的方法
      tmpcol = ~~(col / 3) * 3 + ~~(i % 3);
      if ((tmprow !== row || tmpcol !== col) && board[tmprow][tmpcol] === c) return false;
    }

    return true;
  }
};

let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.' ],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.' ],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.' ],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3' ],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1' ],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6' ],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.' ],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5' ],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9' ],
];

solveSudoku(board);
console.log(board);
