'use strict';

/*
122. Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

/*
这个问题有点奇怪，理解了题意之后，就会发现，似乎有点太简单了。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let N = prices.length, profit = 0;
  for (let i = 0; i < N - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i];
    }
  }
  return profit;
};
