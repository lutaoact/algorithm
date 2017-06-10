'use strict';

let pairs, N;
//N = 10, pairs = require('./tinyUF');//2 components
N = 10, pairs = require('./1.5.1.pairs');//2 components
//N = 625, pairs = require('./mediumUF');//3 components
//N = 1000000, pairs = require('./largeUF');//6 components

let id = [], sz = [];
for (let i = 0; i < N; i++) {
  id[i] = i;
  sz[i] = 1;
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
  let i = find(p);
  let j = find(q);
  if (i === j) return;

  if (sz[i] < sz[j]) {
    id[i] = j;
    sz[j] += sz[i];
  } else {
    id[j] = i;
    sz[i] += sz[j];
  }

  accessTimes += 5;
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
