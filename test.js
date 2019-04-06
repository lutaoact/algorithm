
function binarySearch(nums, key) {// 找出值大于等于key的最小索引
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (nums[mid] === key) return mid;

    if (nums[mid] > key) high = mid - 1;
    else if (nums[mid] < key) low = mid + 1;
  }
  return low;
}

let a = [2, 2, 5, 6, 11, 11, 13, 15];
//console.log(binarySearch(a, 15))

let map = {0: 0, 1: 1, 2: 5, 5: 2, 6: 9, 8: 8, 9: 6};
function isGoodNum(n) {
  let tmp = n, newn = 0, i = 0;
  while (tmp > 0) {
    let remain = tmp % 10;
    tmp = parseInt(tmp / 10);
    let rotate = map[remain];
    if (rotate === undefined) return false; //包含map以外的数字

    newn += rotate * (10 ** i);
    i++;
  }
  return n !== newn;
}

for (let i = 0; i < 100; i++) {
  console.log(i, isGoodNum(i));
}
