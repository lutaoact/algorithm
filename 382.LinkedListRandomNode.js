'use strict';

/*
382. Linked List Random Node

Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

Follow up:
What if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?

Example:

// Init a singly linked list [1,2,3].
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
Solution solution = new Solution(head);

// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
solution.getRandom();
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
//蓄水池抽样算法 https://discuss.leetcode.com/topic/55049/java-solution-with-cases-explain
Solution.prototype.getRandom = function() {
  let node = this.head;
  let r = node.val;
  for (let i = 1; node.next !== null; i++) {
    node = node.next;
    if (Math.floor(Math.random() * (i + 1)) === i) r = node.val;
  }
  return r;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

let solution = new Solution(head);

// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
console.log(solution.getRandom());
