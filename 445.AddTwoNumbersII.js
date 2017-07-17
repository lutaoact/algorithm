'use strict';

/*
445. Add Two Numbers II

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
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
  let stack1 = [], stack2 = [], node1 = l1, node2 = l2;
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let head = null, carry = 0;
  while (stack1.length > 0 && stack2.length > 0) {
    let sum = stack1.pop() + stack2.pop() + carry;
    carry = sum / 10 | 0;
    let current = new ListNode(sum % 10);
    current.next = head;
    head = current;
  }

  if (stack1.length === 0) stack1 = stack2;
  while (stack1.length > 0) {
    let sum = stack1.pop() + carry;
    carry = sum / 10 | 0;
    let current = new ListNode(sum % 10);
    current.next = head;
    head = current;
  }

  if (carry > 0) {
    let current = new ListNode(carry);
    current.next = head;
    head = current;
  }

  return head;
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
console.log(result.next.next);
