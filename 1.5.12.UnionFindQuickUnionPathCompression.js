'use strict';

let pairs, N;
N = 10, pairs = require('./tinyUF');//2 components
//N = 625, pairs = require('./mediumUF');//3 components

let id = [];
for (let i = 0; i < N; i++) {
  id[i] = i;
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
  let pRoot = find(p);
  let qRoot = find(q);
  if (pRoot === qRoot) return;

  id[pRoot] = qRoot;
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
