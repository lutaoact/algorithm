'use strict';

/*
234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
*/

/*
分析：利用fast和slow两个指针遍历，当fast遍历结束的时候，slow刚好会到一半，将slow这一办的结点反转，然后把fast指针重置为链表开头，两个指针同步向后移动，遇到值不相等，则为false。这里需要注意，检查值是否相等的循环结束条件应该是slow === null，因为slow列表长度只有一半，而fast是重置过的head，也就是有整个列表的长度
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
