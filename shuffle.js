'use strict';

//每个数字跟前面的数字交换
//如果i和j是相同的，那nums[i]和a[i]就自然是相同的
//如果i和j不同，那j必然是一个小于i的数，算法同样实现了i和j的交换，nums[i]=nums[j]; nums[j]=a[i]，在nums数组中，将nums[j]和a[i]进行了交换
function shuffle(a) {
  let N = a.length, nums = Array(N);
  for (let i = 0; i < N; i++) {
    let j = uniform(i + 1);
    console.log(i, j);
    nums[i] = nums[j];
    nums[j] = a[i];
  }
  return nums;

  function uniform(n) {
    return Math.random() * n | 0;
  }
}

//每个数字跟所有后面的数字交换
function shuffle2(a) {
  let N = a.length;
  for (let i = 0; i < N; i++) {
    let j = i + uniform(N - i);
    console.log(i, j);
    swap(a, i, j);
  }
  console.log(a);

  function uniform(n) {
    return Math.random() * n | 0;
  }

  function swap(a, i, j) {
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
}

shuffle([1,2,3,4,5,6,7]);
