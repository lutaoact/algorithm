'use strict';
/*
隐含了一个假设，头尾之外的元素都是无穷大，因此，头尾两个元素只需要跟自己的相邻的一个元素进行比较就可以了。
 */

let a = [3, 2, 1];
a = [3, 2, 1, 15, 8, 6, 7, 5, 9];
//a = [4, 3, 1, 2, -4, -3, -2, -1];
console.log(LocalMinimum(a));

function LocalMinimum(a) {
  let N = a.length;
  if (N === 1) {
    return 0;
  }
  //只要序列满足首两个递增或者末两个递减，则直接能拿到结果，不用遍历
  if (a[0] < a[1]) {
    return 0;
  }
  if (a[N - 2] > a[N - 1]) {
    return N - 1;
  }

  //只有先减后增的情况，才需要运算，但正因为先减后增，所以一定存在局部最小值
  let low = 0, high = N - 1;
  while (low < high) {
    let mid = parseInt((low + high) / 2);
    console.log(low, high, mid);
    //三个数字有四种可能的排列顺序
    if (a[mid] < a[mid - 1]) {  // *   *
      if (a[mid] < a[mid + 1]) {//  \ /
        return mid;             //   *   发现mid左右两边都比较大，则mid就是局部小值

      } else {                  //  *
        low = mid;              //   *
      }                         //    *  发现是递减序列，也就是mid比右边的值大，从右边找

    } else {                    //    *    *
      high = mid;               //   *    / \
    }                           //  *    *   * 这两种情况可以合并成一种，就是mid比左边的值大，那么从左边找
  }
  return -1;
}
