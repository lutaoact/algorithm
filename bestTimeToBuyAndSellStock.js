'use strict';

/*
121. Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let N = prices.length, maxSoFar = 0, sumCur = 0;
  for (let i = 1; i < N; i++) {
    sumCur = Math.max(0, sumCur + prices[i] - prices[i - 1]);
    maxSoFar = Math.max(sumCur, maxSoFar);
  }
  return maxSoFar;
};

maxProfit = function(prices) {
  let N = prices.length, min = prices[0], profit = 0;
  for (let i = 1; i < N; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      if (prices[i] - min > profit) {
        profit = prices[i] - min;
      }
    }
  }
  return profit;
};

console.log(maxProfit([7, 3, 5, 4, 0, 8, 7, 9]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
