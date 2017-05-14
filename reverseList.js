'use strict';

function Node(value) {
  this.next = null;
  this.value = value;
}

function buildList(a) {
  let first = new Node(a[0]);
  let current = first;
  for (let i = 1; i < a.length; i++) {
    current.next = new Node(a[i]);
    current = current.next;
  }
  return first;
}

function scan(first) {
  let current = first;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

function reverse(first) {
  let reverseFirst = null;
  let current = first;
  while (current !== null) {
    let next = current.next;
    current.next = reverseFirst;
    reverseFirst = current;
    current = next;
  }
  return reverseFirst;
}

function reverseRecursively(first) {
  if (first === null || first.next === null) return first;
  let second = first.next;
  let rest = reverseRecursively(second);
  second.next = first;
  first.next = null;
  return rest;
}

let a = [1, 2, 3, 4, 5, 6, 7];
let list = new buildList(a);
scan(list);
//scan(reverse(list));
scan(reverseRecursively(list));
