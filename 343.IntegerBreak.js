'use strict';

/*
343. Integer Break

Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

Note: You may assume that n is not less than 2 and not larger than 58.
*/

/**
 * @param {number} n
 * @return {number}
 */
/*
For any integer p strictly greater than 4, it has the property such that 3 * (p - 3) > p, which means breaking it into two integers 3 and p - 3 makes the product larger while keeping the sum unchanged. If p - 3 is still greater than 4, we should break it again into 3 and p - 6, giving 3 * 3 * (p - 6), and so on, until we cannot break it (less than or equal to 4) anymore.

For integer 4, breaking it into 2 * 2 or keeping it as 4 does not change its contribution to the product.
We cannot have more than two 4s, because 2 * 3 * 3 > 4 * 4. We cannot have more than three 2s because 3 * 3 > 2 * 2 * 2.
*/
var integerBreak = function(n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  if (n === 4) return 4;
  if (n === 5) return 6;
  if (n === 6) return 9;
  return 3 * integerBreak(n - 3);
};

/*
Given a number n lets say we have a possible product P = p1 * p2 * ... pk. Then we notice what would happen if we could break pi up into two more terms lets say one of the terms is 2 we would get the terms pi-2 and 2 so if 2(pi-2) > pi we would get a bigger product and this happens if pi > 4. since there is one other possible number less then 4 that is not 2 aka 3. Likewise for 3 if we instead breakup the one of the terms into pi-3 and 3 we would get a bigger product if 3*(pi-3) > pi which happens if pi > 4.5.

Hence we see that all of the terms in the product must be 2's and 3's. So we now just need to write n = 3a + 2b such that P = (3^a) * (2^b) is maximized. Hence we should favor more 3's than 2's in the product if possible.

So if n = 3a then the answer will just be 3^a.

if n = 3a+1 then the answer will be 4*3^(a-1)

and if n = 3a+2 then the answer will be 2*(3^a).

The above three cover all cases that n can be written as and the Math.pow() function takes O(log n) time to preform hence that is the running time.
*/
var integerBreak = function(n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  if (n === 4) return 4;

  let mod = n % 3;
  if (mod === 0) {
    return Math.pow(3, n / 3);
  } else if (mod === 1) {
    return 4 * Math.pow(3, (n / 3 | 0) - 1);
  } else {
    return 2 * Math.pow(3, n / 3 | 0);
  }
};

for (let i = 2; i < 58; i++) {
  console.log(integerBreak(i));
}
