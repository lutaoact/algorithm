'use strict';

/*
215. Kth Largest Element in an Array

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note:
You may assume k is always valid, 1 ? k ? array's length.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//快速查找，利用和快速排序类似的思想，平均复杂度为O(n)，但最坏情况下，可能达到平方级的复杂度
//最好的情况就是每次找的基准值恰好将数组能分成差不多相等的两部分
//最坏的情况就是数组已经有序，每次分组，一组只还有一个元素，一组含有剩下的元素
var findKthLargest = function(nums, k) {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    let j = partition(nums, lo, hi);
    if (j === k - 1) break;

    if (j < k - 1) lo = j + 1;
    else hi = j - 1;
  }
  return nums[k - 1];

  //降序分区：大于v的放左边，小于v的放右边
  function partition(a, lo, hi) {
    let i = lo, j = hi + 1, v = a[lo];
    while (true) {
      while (a[++i] > v) if (i === hi) break;
      while (a[--j] < v) if (j === lo) break;
      if (i >= j) break;
      swap(a, i, j);
    }
    swap(a, lo, j);
    return j;

    function swap(a, i, j) {
      let tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
  }
};

console.log(findKthLargest([1,2,3,7,8,4], 4));
console.log(findKthLargest([3,2,1,5,7,7,7,6,4], 4));
