'use strict';

/*
4. Median of Two Sorted Arrays

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/*
分析：
查找中位数问题，可以扩展出一个更通用的问题，那就是查找两个有序数组中的第k大的元素。

关键点在于将k分成两部分，一部分ia，假设为k/2，另一部分ib，假设为k-k/2，程序员应该都懂这是什么意思——当k为奇数时，整数除法会取整。ia+ib等于k。
比较A[ia-1]和B[ib-1]:
1 A[ia-1] <  B[ib-1]，那第k个数必然不会存在与A的前ia个数中。可以这样理解，将A的前ia个数和B的前ib个数归并到一个数组，因为ia+ib等于k，那得到的数组就正好有k个元素，所以第k个元素一定不会出现在A的前ia个元素中，可以直接截掉A的前ia个元素，从之后的部分继续查找
2 A[ia-1] >  B[ib-1]，截掉B的前ib个元素
3 A[ia-1] == B[ib-1]，随便返回A[ia-1]或B[ib-1]中的一个，都符合条件

递归结束的条件：
1 A和B为空时，直接返回另一个的第k个元素，也就是下标为k-1的元素
2 k=1时，返回min(A[0], B[0])
3 A[ia-1] == B[ib-1]，返回A[ia-1]或B[ib-1]
*/
var findMedianSortedArrays = function(nums1, nums2) {
  let N1 = nums1.length, N2 = nums2.length, total = N1 + N2;
  if (total & 0x1) {
    return findKth(nums1, nums2, 0, N1, 0, N2, (total / 2 | 0) + 1);
  } else {
    return (
      findKth(nums1, nums2, 0, N1, 0, N2,  total / 2 | 0     ) +
      findKth(nums1, nums2, 0, N1, 0, N2, (total / 2 | 0) + 1)
    ) / 2;
  }

  function findKth(A, B, beginA, lenA, beginB, lenB, k) {
    let m = lenA - beginA, n = lenB - beginB;
    if (m === 0) return B[beginB + k - 1];
    if (n === 0) return A[beginA + k - 1];
    if (k === 1) return Math.min(A[beginA], B[beginB]);

    if (m > n) return findKth(B, A, beginB, lenB, beginA, lenA, k);

    let ia = Math.min((k / 2 | 0), m), ib = k - ia;
    if (A[beginA + ia - 1] < B[beginB + ib - 1]) return findKth(A, B, beginA + ia, lenA, beginB, lenB, k - ia);
    if (A[beginA + ia - 1] > B[beginB + ib - 1]) return findKth(A, B, beginA, lenA, beginB + ib, lenB, k - ib);
    return A[beginA + ia - 1];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([], [3, 4]));
console.log(findMedianSortedArrays([7, 8], []));
console.log(findMedianSortedArrays([7, 8, 9], [1, 2, 3]));
