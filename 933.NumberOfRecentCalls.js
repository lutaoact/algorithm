var RecentCounter = function() {
  this.nums = [];
  this.begin = 0;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  function binarySearch(nums, begin, key) {// 找出值大于等于key的最小索引
    let low = begin, high = nums.length - 1;
    while (low <= high) {
      let mid = parseInt((low + high) / 2);
      if (nums[mid] === key) return mid;

      if (nums[mid] > key) high = mid - 1;
      else if (nums[mid] < key) low = mid + 1;
    }
    return low;
  }

  let key = t - 3000;
  let index = binarySearch(this.nums, this.begin, key);
  this.begin = index;
  this.nums.push(t);
  return this.nums.length - this.begin;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */
let obj = new RecentCounter();
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));
