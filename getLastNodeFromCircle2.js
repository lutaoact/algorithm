'use strict';

/*
 * Josephus问题。n个人，围成一圈，编号从0到n-1。从编号为0的人开始报数，每次报到M的人，离开，报到最后，剩下的那个人是编号是几？
 */
function Node(value) {
  this.next = null;
  this.value = value;
}

//先构建一个环
function buildCircle(n) {
  let head = new Node(0);
  let current = head;
  for (let i = 1; i < n; i++) {
    let p = new Node(i);
    current.next = p;
    current = p;
  }
  current.next = head;
  return head;
}

function getResult(n, M) {
  let head = buildCircle(n);
  let current = head;
  let prev = null;
  for (let i = 1; ; i++) {
    if (current.next === current) return current.value;
    if (i % M === 0) {
      console.log(current.value);
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
}

console.log(getResult(7, 2));
