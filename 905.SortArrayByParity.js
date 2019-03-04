/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  function swap(nums, i, j) {
    nums[j] = nums[j] + nums[i];
    nums[i] = nums[j] - nums[i];
    nums[j] = nums[j] - nums[i];
  }
  let i = 0, j = A.length - 1;
  while (i < j) {
    while (A[i] % 2 === 0 && i < j) {
      i++;
    }

    while (A[j] % 2 !== 0 && i < j) {
      j--;
    }

    if (i < j) {
      swap(A, i, j);
    }
  }
  return A;
};

let A = [3,1,2,4];
console.log(sortArrayByParity(A));

A = [3,1,6,5,7,3,8,2,4];
console.log(sortArrayByParity(A));
