'use strict';

/*
401. Binary Watch

A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.

0 0 1 1
0 1 1 0 0 1

For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

Example:

Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
Note:
The order of output does not matter.
The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".
*/

/*
分析：将每个数的bitCount事先算好，4个灯最大到11，6个灯的最大到59
{ '0': [ 0 ],
  '1': [ 1, 2, 4, 8 ],
  '2': [ 3, 5, 6, 9, 10 ],
  '3': [ 7, 11 ],
  '4': [],
  '5': [] }

{ '0': [ 0 ],
  '1': [ 1, 2, 4, 8, 16, 32 ],
  '2': [ 3, 5, 6, 9, 10, 12, 17, 18, 20, 24, 33, 34, 36, 40, 48 ],
  '3': [ 7, 11, 13, 14, 19, 21, 22, 25, 26, 28, 35, 37, 38, 41, 42, 44, 49, 50, 52, 56 ],
  '4': [ 15, 23, 27, 29, 30, 39, 43, 45, 46, 51, 53, 54, 57, 58 ],
  '5': [ 31, 47, 55, 59 ] }

4个灯的不能全亮，全亮就是15，大于最大小时数11，不符合要求，所以4个灯里面最多只有3个灯亮。同理推出6个灯的情况。

根据亮的灯的个数，直接就能拿到可能的数字列表，然后两两组合就行了。
*/

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  if (num === 0) return ['0:00'];
  if (num > 8) return [];

  let bitCountMap = [ 0, 1, 1, 2, 1, 2, 2, 3 ];//0-7 bitCount
  let map4 = {}, map6 = {}, bitCount;
  for (let i = 0; i <= 59; i++) {
    bitCount = bitCountMap[i % 8] + bitCountMap[Math.floor(i / 8)];
    if (!map4[bitCount]) map4[bitCount] = [];
    if (!map6[bitCount]) map6[bitCount] = [];

    if (i <= 11) map4[bitCount].push(i);

    map6[bitCount].push(i);
  }

  let results = [], a4, a6;
  for (let i = 0; i <= 3; i++) {
    if (!map6[num - i]) continue;

    a4 = map4[i], a6 = map6[num - i];
    for (let x = 0; x < a4.length; x++) {
      for (let y = 0; y < a6.length; y++) {
        results.push(`${a4[x]}:${a6[y] > 9 ? a6[y] : '0' + a6[y]}`);
      }
    }
  }
  return results;
};
console.log(readBinaryWatch(4));
