'use strict';

/*
421. Maximum XOR of Two Numbers in an Array

Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

Could you do this in O(n) runtime?

Example:

Input: [3, 10, 5, 25, 2, 8]

Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
/*
关于异或运算的一条神奇规则：if a^b=c, then a^c=b, b^c=a. 如果不知道这个，就无法看明白下面的代码。
我在看的时候百思不得其解，最后我反推出，如果这个方案要可行，必须要存在上面所说的这条规则，我尝试了几个例子，好像确实是成立的，然后又在网上的讨论中，看到确实是有这样的规则。
二进制运算博大精深啊
*/
var findMaximumXOR = function(nums) {
  let max = 0, mask = 0;

  for (let i = 31; i >= 0; i--) {
    mask |= 1 << i;

    let map = {};
    nums.forEach(num => {
      map[num & mask] = true;
    });

    //max第i位左边的位都已经确定了，然后将第i位的值变为1，赋值给tmp，第i位右边的位此时都为0
    //max需要通过这个tmp变量来确定自己第i位应该是0还是1，这需要利用下面的循环运算来确定
    let tmp = max | 1 << i;
    for (let prefix in map) {//tmp和prefix第i位右边都为0，所以不用管，异或运算只影响第i位以及左边的位
      if (map[tmp ^ prefix]) {//因为异或运算的神奇规则，所以，如果tmp和prefix的异或结果也在map中，那map中一定存在另一个值，它和prefix取异或等于tmp
        max = tmp;            //如果存在这样的值，那就能确定max的第i位上的值应该为1，这里可以直接把tmp赋值给max，也可以max |= 1 << i;
        break;
      }
    }
  }
  return max;
};

//这是上面方案的一个小改进，减少循环次数
findMaximumXOR = function(nums) {
  let max = 0, mask = 0, N = nums.length;
  for (let i = 31; i >= 0; i--) {
    mask |= 1 << i;
    let map = {}, tmp = max | 1 << i;
    for (let i = 0; i < N; i++) {
      let prefix = nums[i] & mask;
      if (map[prefix ^ tmp]) {
        max = tmp;
        break;
      } else {
        map[prefix] = true;
      }
    }
  }
  return max;
};

console.log(findMaximumXOR([3, 4]));
console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]));

function printBinary(num) {
  let str = '';
  for (let i = 0; i < 32; i++) {
    str = '' + (num >> i & 1) + str;
  }
}
