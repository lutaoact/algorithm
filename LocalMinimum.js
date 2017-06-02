'use strict';

let a = [3, 2, 1];
a = [3, 2, 1, 15, 8, 6, 7, 5, 9];
a = [4, 3, 1, 2, -4, -3, -2, -1];
console.log(LocalMinimum(a));

function LocalMinimum(a) {
  let N = a.length;
  if (N === 1) {
    return 0;
  }
  if (a[0] < a[1]) {
    return 0;
  }
  if (a[N - 2] > a[N - 1]) {
    return N - 1;
  }
  let low = 0, high = N - 1;
  while (low < high) {
    let mid = parseInt((low + high) / 2);
    console.log(low, high, mid);
    if (a[mid] < a[mid - 1] && a[mid] < a[mid + 1]) {// *   *
      return mid;                                    //  \ /
    }                                                //   *

    if (a[mid - 1] < a[mid] && a[mid] < a[mid + 1]) {//    *
      high = mid;                                    //   *
    }                                                //  *

    if (a[mid - 1] > a[mid] && a[mid] > a[mid + 1]) {//  *
      low = mid;                                     //   *
    }                                                //    *

    if (a[mid - 1] < a[mid] && a[mid] > a[mid + 1]) {//   *
      low = mid;//或者high = mid也行，两边都有       //  / \
    }                                                // *   *
  }
  return -1;
}
/*
隐含了一个假设，头尾之外的元素都是无穷大，因此，头尾两个元素只需要跟自己的相邻的一个元素进行比较就可以了。
 */
