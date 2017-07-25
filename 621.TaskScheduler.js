'use strict';

/*
621. Task Scheduler

Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks.Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

Example 1:
Input: tasks = ['A','A','A','B','B','B'], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
Note:
The number of tasks is in the range [1, 10000].
The integer n is in the range [0, 100].
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let N = tasks.length, count = Array(26).fill(0);
  for (let i = 0; i < N; i++) {
    let index = tasks[i].charCodeAt() - 65;
    count[index]++;
  }
  count.sort((a, b) => a - b);

  let i = 25;
  while (i >= 0 && count[i] === count[25]) i--;

  return Math.max(N, (count[25] - 1) * (n + 1) + (25 - i));
};

//第一种方法的改进版，只用遍历一次即可
leastInterval = function(tasks, n) {
  let N = tasks.length, count = Array(26).fill(0), max = 0, maxNum = 0;
  for (let i = 0; i < N; i++) {
    let index = tasks[i].charCodeAt() - 65;
    count[index]++;
    if (count[index] > max) {
      max = count[index];
      maxNum = 1;
    } else if (count[index] === max) {
      maxNum++;
    }
  }

  return Math.max(N, (max - 1) * (n + 1) + maxNum);
};

//我这方法，慢是慢了点，但是我自己想出来的
leastInterval = function(tasks, n) {
  let N = tasks.length, count = Array(26).fill(0), counter = 0;
  for (let i = 0; i < N; i++) {
    let index = tasks[i].charCodeAt() - 65;
    if (count[index]++ === 0) {
      counter++;
    }
  }
//  console.log(count, counter);

  let result = 0;
  while (N > 0) {
    count.sort((a, b) => b - a);
//    console.log(count);

    let numOfDoneTasks = counter > n ? n + 1 : counter;
    N -= numOfDoneTasks;
    if (N === 0) {
      return result + numOfDoneTasks;
    }
    result += n + 1;

    for (let i = 0; i < numOfDoneTasks; i++) {
      if (--count[i] === 0) counter--;
    }
  }
  return result;
};

let tasks = ['A','A','A','B','B','B','X','X','Z'], n = 1;
console.log(leastInterval(tasks, n));
tasks = ['A','A','A'], n = 1;
console.log(leastInterval(tasks, n));
