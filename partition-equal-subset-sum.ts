/**
 * November Leetcoding Challenge - Day 27
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/567/week-4-november-22nd-november-28th/3545/
 * 
 * Time: O(N); Space: O(N)
 */
function canPartition(nums: number[]): boolean {
  const total = nums.reduce((a, b) => a + b, 0)
  if (total % 2 !== 0) return false

  const dp: boolean[] = Array(total / 2 + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= nums.length; i += 1) {
    for (let j = total / 2; j >= nums[i - 1]; j -= 1) {
      dp[j] = dp[j] || dp[j - nums[i - 1]]
    }
  }

  return dp[total / 2]
}


const cases: number[][] = [
  [1, 5, 11, 5],
  [1, 2, 3, 5],
  [1, 2, 5],
  [1, 5, 11, 5, 1, 5, 11, 5, 1, 5, 11, 5, 1, 5, 11, 5, 1, 5, 11, 5, 1, 5, 11, 5, 1, 5, 11, 5, 1, 5, 11, 5, 1, 5, 11, 5, 1, 5, 11, 5, 1, 5, 11, 5, 1, 5, 11, 5],
]
for (const nums of cases) canPartition(nums)