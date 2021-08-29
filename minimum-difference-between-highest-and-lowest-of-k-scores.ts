/**
 * August 28 Leetcode Contest - https://leetcode.com/contest/weekly-contest-256/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 * 5854. Minimum Difference Between Highest and Lowest of K Scores
 * 
 * Time: O(N Log N); Space: O(1)
 */
function minimumDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)

  let min = 2 ** 32
  for (let i = 0; i + k - 1 < nums.length; i += 1) {
    min = Math.min(min, nums[i + k - 1] - nums[i])
  }
  return min
}

const cases: [number[], number][] = [
  [[90], 1],                                             // 0
  [[9, 4, 1, 7], 2],                                     // 2
  [[87063, 61094, 44530, 21297, 95857, 93551, 9918], 6], // 74560
]
for (const [nums, k] of cases) console.log(minimumDifference(nums, k))