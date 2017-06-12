'use strict';

/*
551. Student Attendance Record I

You are given a string representing an attendance record for a student. The record only contains the following three characters:

'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let N = s.length, map = {A: 0, L: 0};
  for (let i = 0; i < N; i++) {
    let c = s[i];
    if (c === 'A' && ++map[c] > 1) return false;

    if (c === 'L') {
      if (++map[c] > 2) return false;
    } else {
      map.L = 0;
    }
  }
  return true;
};

//console.log(checkRecord('PPALLP'));
//console.log(checkRecord('PPALLL'));
console.log(checkRecord('LALPLL'));
