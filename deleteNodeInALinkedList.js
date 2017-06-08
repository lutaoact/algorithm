'use strict';

/*
237. Delete Node in a Linked List

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
我所知的删除节点的思路一般有两种：
1. 将上一个节点的next指向当前节点的下一个节点，这样，当前节点就被跳过了，即prev.next = current.next;
2. 用后一个节点覆盖当前节点，在无法获取前一个节点的情况下，一般用这种处理方式
*/

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;//用下一个节点的val覆盖了当前节点的val
  node.next = node.next.next;//把当前节点的next，指向他的下下一个节点
};
