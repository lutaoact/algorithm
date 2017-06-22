'use strict';

/*
203. Remove Linked List Elements

Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/*
分析：删除节点的做法是将prev.next赋值为current.next，也就是跳过current结点，因为不确定指定的值在链表的什么位置，所以另一种删除结点的做法不可用。
另一种删除结点的方法：
  current.val = current.next.val;
  current.next = current.next.next;
显然，这种方法要求current.next不能为空，也就是结点只能出现在链表中间而不能出现在链表末尾。这种方法主要用于处理环状链表的时候，不存在下一个结点为空的情况。
*/

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  while (head && head.val === val) head = head.next;
  if (head === null) return null;

  let prev = head, current = head.next;
  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return head;
};

let head = new ListNode(4);
head.next = new ListNode(6);
head.next.next = new ListNode(4);
console.log(removeElements(head, 6));
