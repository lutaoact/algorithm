'use strict';

/*
36. Valid Sudoku

Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let used;
  for (let i = 0; i < 9; i++) {
    used = Array(9);
    for (let j = 0; j < 9; j++) {//检查行
      if (!check(board[i][j], used)) return false
    }

    used = Array(9);
    for (let j = 0; j < 9; j++) {//检查列
      if (!check(board[j][i], used)) return false
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      used = Array(9);
      for (let m = i * 3; m < i * 3 + 3; m++) {
        for (let n = j * 3; n < j * 3 + 3; n++) {
          if (!check(board[m][n], used)) return false;
        }
      }
    }
  }
  return true;

  function check(c, used) {
    if (c === '.') return true;
    if (used[c - 1]) return false;
    used[c - 1] = true;
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

console.log(isValidSudoku(board));
