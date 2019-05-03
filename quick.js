function quickSortHelper(nums, left, right) {
  if (left >= right) return;

  let l = left, r = right;
  let pivot = nums[l];
  while (l < r) {
    while (l < r && nums[r] >= pivot) r--;
    nums[l] = nums[r];

    while (l < r && nums[l] <= pivot) l++;
    nums[r] = nums[l];
  }
  nums[l] = pivot;

  quickSortHelper(nums, left, l - 1);
  quickSortHelper(nums, l + 1, right);
}

function quickSort(nums) {
  let l = 0, r = nums.length - 1;
  quickSortHelper(nums, l, r);
}

let ary = [2, 1, 8, 7, 2, 3, 6, 5, 9, 8, 3, 11, 19, 17, 12, 63, 25];
quickSort(ary);
console.log(ary);
