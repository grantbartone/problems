/**
 * March 20th Leetcode Contest - 5709. Maximum Ascending Subarray Sum
 * https://leetcode.com/contest/weekly-contest-233/problems/maximum-ascending-subarray-sum/
 * 
 * Time: O(N); Space: O(1)
 */

function maxAscendingSum(nums: number[]): number {
  let max = 0
  for (let i = 0; i < nums.length; i += 1) {
    let currMax = nums[i]
    while (nums[i + 1] > nums[i]) {
      i += 1
      currMax += nums[i]
    }
    max = Math.max(max, currMax)
  }
  return max
}

const cases: number[][] = [
  [10, 20, 30, 5, 10, 50],
  [10, 20, 30, 40, 50],
  [12, 17, 15, 13, 10, 11, 12],
  [100, 10, 1],
]
for (const nums of cases) console.log(maxAscendingSum(nums))