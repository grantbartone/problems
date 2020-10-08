/**
 * August Leetcoding Challenge - Day 7
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3414/
 * 
 * Time: O(N); Space: O(1)
 */
function findDuplicates(nums: number[]): number[] {
    const results: number[] = []
    for (const a of nums) {
        const i = Math.abs(a)
        if (nums[i - 1] > 0)
            nums[i - 1] *= -1
        else
            results.push(i)
    }
    return results
}

// TEST CASES
(function() {
    const tests: number[][] = [
        [4,3,2,7,8,2,3,1],
        [1,2,3,4,5,6,1,2],
    ]
    for (const nums of tests) console.log(findDuplicates(nums))
})()