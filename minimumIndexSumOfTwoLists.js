'use strict';

/*
599. Minimum Index Sum of Two Lists

Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Example 1:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
Example 2:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
Note:
The length of both lists will be in the range of [1, 1000].
The length of strings in both lists will be in the range of [1, 30].
The index is starting from 0 to the list length minus 1.
No duplicates in both lists.
/*

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let len1 = list1.length, len2 = list2.length, map = {};
  for (let i = 0; i < len1; i++) {
    map[list1[i]] = i;
  }

  let result = [], minIndex = len1 + len2;
  for (let i = 0; i < len2; i++) {
    let key = list2[i];
    let index = map[key];
    if (index !== undefined) {
      let sum = index + i;
      if (sum < minIndex) {
        minIndex = sum;
        result = [key];
      } else if (sum === minIndex) {
        result.push(key);
      }
    }
  }
  return result;
};

let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];

list1 = ["xxxxx", "Tapioca Express", "Burger King", "Shogun"],
list2 = ["KFC", "Shogun", "Burger King"];
console.log(findRestaurant(list1, list2));
