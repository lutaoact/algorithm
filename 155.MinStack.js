'use strict';

/*
155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = Infinity;
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (x <= this.min) {//注意，这里一定是<=，不能是<，否则在pop的时候会出错
    this.stack.push(this.min);//更新min的时候，把前一个min值也放入stack
    this.min = x;
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  //如果pop出来的值正好是当前的最小值，那说明此时栈顶的值就是之前push进去的第二小的值，将min更新为该值
  if (this.stack.pop() === this.min) {
    this.min = this.stack.pop();
    console.log('min', this.min);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  let x = this.stack.pop();
  this.stack.push(x);
  return x;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
//obj.push(-2);
//obj.push(0);
//obj.push(-3);
//obj.getMin();
//obj.pop();
//console.log(obj.top());
//console.log(obj.getMin());

obj.push(-1);
obj.push(2);
obj.push(-1);
console.log(obj.getMin());
obj.pop();
console.log(obj.top());
console.log(obj.getMin());
