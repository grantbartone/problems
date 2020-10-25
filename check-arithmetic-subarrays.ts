/*
 * Leetcode Weekly Contest 212 - October 24, 2020 - LC Medium
 * https://leetcode.com/contest/weekly-contest-212/problems/arithmetic-subarrays/
 * 
 * Time: O(N Log N); Space: O(N)
 */
function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    const result: boolean[] = []
    for (let i = 0; i < l.length; i += 1) result.push(isArithmetic(nums.slice(l[i], r[i] + 1)))
    return result
}

const isArithmetic = (nums: number[]): boolean => {
    nums.sort((a, b) => a - b)
    const diff = nums[1] - nums[0]
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] - nums[i - 1] !== diff) return false
    }
    return true
}

// TEST CASES
(function() {
    const tests: [ number[], number[], number[] ][] = [
        [ [4,6,5,9,3,7], [0,0,2], [2,3,5] ],
        [ [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10] ],
    ]
    for (const [nums, l, r] of tests)
        console.log(checkArithmeticSubarrays(nums, l, r))
})()