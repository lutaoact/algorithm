'use strict';

/*
319. Bulb Switcher

There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.

Example:

Given n = 3.

At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off].

So you should return 1, because there is only one bulb is on.
*/

/**
 * @param {number} n
 * @return {number}
 */
/*
一个灯泡刚开始是off状态，最终在n轮后要停在on状态，则必然要求它被toggle了奇数次，因为toggle偶数次的最终状态一定是off。

Call them bulb 1 to bulb n. Bulb i is toggled in round d if and only if d divides i(d整除i). So bulb i ends up on if and only if it has an odd number of divisors(奇数个约数).

Divisors come in pairs, like i=12 has divisors 1 and 12, 2 and 6, and 3 and 4. Except when i is a square(平方数), like 36 has divisors 1 and 36, 2 and 18, 3 and 12, 4 and 9, and double divisor 6. So bulb i ends up on if and only if i is a square.

So just count the square numbers.

Let R = int(sqrt(n)). That's the root(平方根) of the largest square in the range [1,n]. And 1 is the smallest root. So you have the roots from 1 to R, that's R roots(也就是R个平方根). Which correspond to the R squares. So int(sqrt(n)) is the answer.
*/
var bulbSwitch = function(n) {
  return Math.floor(Math.sqrt(n));
};

console.log(bulbSwitch(4));
console.log(bulbSwitch(9));
