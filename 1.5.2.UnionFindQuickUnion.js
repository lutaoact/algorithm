'use strict';

let pairs, N;
N = 10, pairs = require('./1.5.1.pairs');//2 components
//N = 625, pairs = require('./mediumUF');//3 components

let id = [];
for (let i = 0; i < N; i++) {
  id[i] = i;
}

let accessTimes = 0;
let count = N;

function connected(p, q) {
  return find(p) === find(q);
}

function find(p) {
  while (p !== id[p]) {
    p = id[p];
    accessTimes += 2;
  }
  accessTimes++;
  return p;
}

function union(p, q) {
  let pRoot = find(p);
  let qRoot = find(q);
  if (pRoot === qRoot) return;

  id[pRoot] = qRoot;
  accessTimes++;
  count--;
}

for (let i = 0; i < pairs.length; i++) {
  let p = pairs[i][0], q = pairs[i][1];
  if (connected(p, q)) continue;

  accessTimes = 0;
  union(p, q);
  console.log(p + ' ' + q + ' ' + accessTimes);
  console.log(id);
}
console.log(id);
console.log(count + ' components');
