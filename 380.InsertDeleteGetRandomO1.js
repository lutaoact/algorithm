'use strict';

/*
380. Insert Delete GetRandom O(1)

Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = {};
  this.ary = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map[val] === undefined) {
    this.map[val] = this.ary.length;//map的值为元素在数组中的位置
    this.ary.push(val);

//    console.log(this.ary, this.map);
    return true;
  }
  return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
/*
删除操作是比较tricky的，我们还是要先判断其是否在哈希表里，如果没有，直接返回false。由于哈希表的删除是常数时间的，而数组并不是，为了使数组删除也能常数级，我们实际上将要删除的数字和数组的最后一个数字调换个位置，然后修改对应的哈希表中的值，这样我们只需要删除数组的最后一个元素即可，保证了常数时间内的删除
*/
RandomizedSet.prototype.remove = function(val) {
  if (this.map[val] !== undefined) {
    let index = this.map[val];
    this.map[val] = undefined;//从map中删除key

    let tail = this.ary.pop();//弹出数组的最后一个元素，通过判断index，确定这个元素是否就是需要删除的元素
    if (index < this.ary.length) {//如果index此时等于数组长度，则表示刚才弹出的元素就是需要删除的元素，无需做更多操作
      this.ary[index] = tail;     //否则，把最后一个元素放到index所指定的位置上
      this.map[tail]  = index;    //更新map中末尾元素的索引
    }
//    console.log(this.ary, this.map);
    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.ary[Math.random() * this.ary.length | 0];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

let obj = new RandomizedSet();
obj.insert(1);
obj.insert(2);
obj.insert(3);
obj.insert(4);
obj.insert(5);

for (let i = 0; i < 10; i++) {
  console.log(obj.getRandom());
}

obj.remove(2);
obj.remove(4);

for (let i = 0; i < 10; i++) {
  console.log(obj.getRandom());
}
