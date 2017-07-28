'use strict';

/*
309. Best Time to Buy and Sell Stock with Cooldown

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

prices = [1, 2, 3, 0, 2]
maxProfit = 3
transactions = [buy, sell, cooldown, buy, sell]
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
//https://discuss.leetcode.com/topic/30431/easiest-java-solution-with-explanations/2
//https://discuss.leetcode.com/topic/30421/share-my-thinking-process

//状态转移方程
//buy[i] = max(sell[i-2]-price, buy[i-1])
//sell[i] = max(buy[i-1]+price, sell[i-1])
var maxProfit = function(prices) {
  let sell = 0, prevSell = 0, buy = -prices[0], prevBuy;
  for (let i = 0, N = prices.length; i < N; i++) {
    //循环开始的时候，这些值保存的都是上一个循环的值：buy为buy[i-1]，prevBuy为buy[i-2]，sell为sell[i-1]，prevSell为sell[i-2]
    prevBuy = buy;//prevBuy更新为buy[i-1]
    buy = Math.max(prevSell - prices[i], prevBuy);//此时的prevSell还未被更新，依然是sell[i-2]，本式相当于max(sell[i-2]-price, buy[i-1])
    prevSell = sell;//prevSell更新为sell[i - 1];
    sell = Math.max(prevBuy + prices[i], prevSell);//max(buy[i-1]+price, sell[i-1])
  }
  return sell;
};

console.log(maxProfit([1, 2, 3, 0, 2]));
