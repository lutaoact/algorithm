/**
 * Initialize your data structure here.
 */
function Node(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
}

var MyHashMap = function() {
  this.N = 1024;
  this.buckets = Array(this.N).fill(null);
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  let hashKey = key % this.N;
  if (!this.buckets[hashKey]) {
    this.buckets[hashKey] = new Node(key, value);
    return;
  }

  let node = this.buckets[hashKey];
  if (node.key === key) {
    node.val = value;
    return;
  }
  while (node.next) {
    node = node.next;
    if (node.key === key) {
      node.val = value;
      return;
    }
  }
  node.next = new Node(key, value);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  let hashKey = key % this.N;

  let node = this.buckets[hashKey];
  while (node) {
    if (node.key === key) {
      return node.val;
    }
    node = node.next;
  }
  return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
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
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
let obj = new MyHashMap();
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1));
console.log(obj.get(3));
obj.put(2, 1);
console.log(obj.get(2));
obj.remove(2);
console.log(obj.get(2));
console.log(obj);
