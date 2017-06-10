'use strict';

let pairs, N;
//N = 10, pairs = require('./tinyUF');//2 components
N = 625, pairs = require('./mediumUF');//3 components

let id = [];
for (let i = 0; i < N; i++) {
  id[i] = i;
}

let count = N;

function connected(p, q) {
  return find(p) === find(q);
}

function find(p) {
  return id[p];
}

function union(p, q) {
  let pId = find(p);
  let qId = find(q);
  if (pId === qId) return;
  for (let i = 0; i < N; i++) {
    if (id[i] === pId) id[i] = qId;
  }
  count--;//两个分量归并，连通分量总数减一
}

for (let i = 0; i < pairs.length; i++) {
  let p = pairs[i][0], q = pairs[i][1];
  if (connected(p, q)) continue;

  union(p, q);
  console.log(p + ' ' + q);
}
console.log(count + ' components');
