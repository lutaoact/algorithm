'use strict';

/*
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let node1 = l1, node2 = l2;
  let sum = l1.val + l2.val, carry = sum / 10 | 0;
  l1.val = sum % 10;
  while (node1.next && node2.next) {
    node1 = node1.next, node2 = node2.next;
    sum = node1.val + node2.val + carry;
    carry = sum / 10 | 0;
    node1.val = sum % 10;
  }

  if (node1.next === null) node1.next = node2.next;

  while (node1.next && carry > 0) {
    node1 = node1.next;
    sum = node1.val + carry;
    carry = sum / 10 | 0;
    node1.val = sum % 10;
  }

  if (carry > 0) node1.next = new ListNode(carry);

  return l1;
};

let l1, l2, result;
l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(3);

l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(6);
l2.next.next.next = new ListNode(6);
l2.next.next.next.next = new ListNode(9);

result = addTwoNumbers(l1, l2);
console.log(result);
console.log(result.next.next.next);

l1 = new ListNode(5);

l2 = new ListNode(5);

result = addTwoNumbers(l1, l2);
console.log(result);
