'use strict';

/*
83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) return head;

  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {//通过将重复节点合并来去掉重复节点
      current.val = current.next.val;
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

deleteDuplicates = function(head) {
  if (head === null || head.next === null) return head;

  let result = head, current = head.next;
  while (current) {
    if (result.val !== current.val) {//重复节点直接跳过
      result.next = current;
      result = result.next;
    }
    current = current.next;
  }
  result.next = null;//去掉尾部的重复值
  return head;
};

let head = new ListNode(1);
head.next = new ListNode(1);
//head.next.next = new ListNode(2);
//head.next.next.next = new ListNode(3);
//head.next.next.next.next = new ListNode(3);
//head.next.next.next.next.next = new ListNode(3);
//head.next.next.next.next.next.next = new ListNode(4);

console.log(deleteDuplicates(head));
