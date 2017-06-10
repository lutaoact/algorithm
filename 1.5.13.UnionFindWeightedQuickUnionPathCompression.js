'use strict';

let pairs, N;
//N = 10, pairs = require('./tinyUF');//2 components
//N = 625, pairs = require('./mediumUF');//3 components
N = 1000000, pairs = require('./largeUF');//6 components

let id = [], sz = [];
for (let i = 0; i < N; i++) {
  id[i] = i;
  sz[i] = 1;
}

let count = N;

function connected(p, q) {
  return find(p) === find(q);
}

function find(p) {
  let node = p;
  while (p !== id[p]) p = id[p];

  let root = p;
  while (id[node] !== root) {
    let next = id[node];
    id[node] = root;
    node = next;
  }
  return root;
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

  count--;
}

for (let i = 0; i < pairs.length; i++) {
  let p = pairs[i][0], q = pairs[i][1];
  if (connected(p, q)) continue;

  union(p, q);
  console.log(p + ' ' + q);
}
console.log(id);
console.log(count + ' components');
