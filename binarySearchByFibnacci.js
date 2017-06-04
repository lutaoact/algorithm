'use strict';
//1.4.22
let a = [2, 5, 6, 7, 8, 9, 11, 13];

console.log(binarySearchByFibnacci(a, 13));

//斐波那契数列：[ 0, 1, 1, 2, 3, 5, 8 ]
/*
利用斐波那契数将数组分为两部分的时候，应该把fibs[k - 1]个元素分在前边，fibs[k - 2]个元素放在后边，也就是多的部分放在前面，顺序不能颠倒。
因为根据斐波那契数列的特点，当k = 2时，fibs[k - 2]为0，那么mid = low + fibs[k - 2] - 1会访问low - 1对应的元素，这已经算是越界访问。此时数组分为两部分，元素个数分别是0个和1个，对含有0个元素的数组访问，必然是越界的
 */
function binarySearchByFibnacci(a, key) {
  let N = a.length;
  let fibs = buildFibs(N);
  console.log(fibs);
  let low = 0, high = N - 1, k = fibs.length - 1;
  while (low <= high) {
    let mid = low + fibs[k - 1] - 1;

    //超出数组长度的部分，假设用数组的最后一个元素补齐
    let value = mid > N - 1 ? a[N - 1] : a[mid];//防止数组访问越界
//    console.log(low, high, mid, value, k);

    if (value < key) {
      low = mid + 1;
      k = k - 2;//key在右半边
    } else if (value > key) {
      high = mid - 1;
      k = k - 1;//key在左半边
    } else {
      return mid > N - 1 ? N - 1 : mid;
    }
  }
  return -1;
}

function buildFibs(N) {
  let fibs = [0, 1], fib;
  for (let i = 2; fib = fibs[i - 1] + fibs[i - 2]; i++) {
    if (fib < N) {
      fibs[i] = fib;
    } else {
      break;
    }
  }
  fibs.push(fib);
  return fibs;
}
