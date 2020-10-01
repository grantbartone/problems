/**
 * September Leetcoding Challenge - Day 30
 * https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/558/week-5-september-29th-september-30th/3478/
 * 
 * Time: O(N); Space: O(1)
 */
function firstMissingPositive(nums: number[]): number {
    const minNum: number = Math.min(...nums), maxNum: number = Math.max(...nums)
    if (minNum > 1 || maxNum < 1) return 1
    for (let i = 1; i < maxNum; i += 1) {
        if (!nums.includes(i)) return i
    }
    return maxNum + 1
};

// TEST CASES
(function() {
    const tests: number[][] = [
        [1,2,0],
        [3,4,-1,1],
        [7,8,9,11,12],
        [1,2,3,4,5,6],
        [-5],
        []
    ]
    for (const nums of tests) console.log(firstMissingPositive(nums))
})()