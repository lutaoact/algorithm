'use strict';

/*
206. Reverse Linked List

Reverse a singly linked list.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//递归
var reverseList = function(head) {
  if (head === null || head.next === null) return head;

  let second = head.next;
  let reverse = reverseList(second);
  second.next = head;
  head.next = null;
  return reverse;
};

//循环
reverseList = function(head) {
  if (head === null || head.next === null) return head;

  let first = head, reverse = null;
  while (first !== null) {
    let second = first.next;
    first.next = reverse;
    reverse = first;
    first = second;
  }

  return reverse;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

console.log(reverseList(head));
