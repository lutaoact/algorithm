/**
 * Initialize your data structure here.
 */
function Node(key) {
  this.key = key;
  this.next = null;
}

var MyHashSet = function() {
  this.N = 1024;
  this.buckets = Array(this.N).fill(null);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  let hashKey = key % this.N;
  if (!this.buckets[hashKey]) {
    this.buckets[hashKey] = new Node(key);
    return;
  }
  let node = this.buckets[hashKey];
  if (node.key === key) return;

  while (node.next) {
    node = node.next;
    if (node.key === key) return;
  }
  node.next = new Node(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  let hashKey = key % this.N;
  if (!this.buckets[hashKey]) {
    return;
  }
  let node = this.buckets[hashKey];
  if (node.key === key) {
    this.buckets[hashKey] = node.next;
    node.next = null;
    return;
  }
  let prev = node;
  while (node.next) {
    node = node.next;
    if (node.key === key) {
      prev.next = node.next;
      node.next = null;
      return;
    }
    prev = node;
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  let hashKey = key % this.N;
  if (!this.buckets[hashKey]) {
    return false;
  }
  let node = this.buckets[hashKey];
  if (node.key === key) return true;

  while (node.next) {
    node = node.next;
    if (node.key === key) return true;
  }
  return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
let hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
console.log(hashSet.contains(1));
console.log(hashSet.contains(3));
hashSet.add(2);
console.log(hashSet.contains(2));
hashSet.remove(2);
console.log(hashSet.contains(2));
