'use strict';

/*
234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null || head.next === null) return true;

  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast !== null) slow = slow.next;//奇数个结点，让右半边的元素少1个

  slow = reverseList(slow);
  fast = head;
  while (slow) {
    if (slow.val !== fast.val) return false;
    slow = slow.next;
    fast = fast.next;
  }
  return true;

  function reverseList(first) {
    if (first === null || first.next === null) return first;
    let current = first, reverse = null;
    while (current) {
      second = current.next;
      current.next = reverse;
      reverse = current;
      current = second;
    }
    return reverse;
  }
};
