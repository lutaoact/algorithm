'use strict';

/*
21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
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
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let head, merge;
  if (l1.val < l2.val) {
    head = l1;
    merge = head;
    l1 = l1.next;
  } else {
    head = l2;
    merge = head;
    l2 = l2.next;
  }

  while (l1 && l2) {
    if (l1.val < l2.val) {
      merge.next = l1;
      merge = merge.next;
      l1 = l1.next;
    } else {
      merge.next = l2;
      merge = merge.next;
      l2 = l2.next;
    }
  }

  if (l1) {
    merge.next = l1;
  } else if (l2) {
    merge.next = l2;
  }
  return head;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(5);

let result = mergeTwoLists(l1, l2);
console.log(result.next);
console.log(result.next.next);
console.log(result.next.next.next);
//console.log(mergeTwoLists(l1, l2).next.next.next);
