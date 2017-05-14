'use strict';

/*
 * Josephus问题：利用队列操作
 */
function buildQueue(n) {
  let result = Array(n);
  let i = -1;
  while (++i < n) result[i] = i;
  return result;
}

function getResult(n, M) {
  let queue = buildQueue(n);
  for (let i = 1; queue.length > 0; i++) {
    if (i % M === 0) {
      console.log(queue.shift());
    } else {
      queue.push(queue.shift());
    }
  }
}

getResult(7, 2);
