/**
 * October Leetcoding Challenge - Day 15
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3496/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * Time: O(1); Space: O(1)
 */
var rotate = function(nums, k) {
    k %= nums.length
    for (let i = 0; i < nums.length - k; i += 1) {
        nums.push(nums.shift())
    }
    return nums
};


/* TEST CASES
[1,2,3,4,5,6,7]
3
[1,2,3,4,5,6,7]
2
[1,2,3,4,5,6,7]
1
[1,2,3,4,5,6,7]
0
[1,2,3,4,5,6,7]
4
[1,2,3,4,5,6,7]
5
[1,2,3,4,5,6,7]
6
[1,2,3,4,5,6,7]
7
[1,2,3,4,5,6,7]
8
*/