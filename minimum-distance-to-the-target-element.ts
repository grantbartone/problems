/**
 * May 1st Leetcode Contest - 5746. Minimum Distance to the Target Element
 * https://leetcode.com/contest/weekly-contest-239/problems/minimum-distance-to-the-target-element/
 * 
 * Time: O(N / 2); Space: O(1)
 */
function getMinDistance(nums: number[], target: number, start: number): number {
  let result = 0
  while (true) {
    if (start + result < nums.length && nums[start + result] === target) return result
    if (start - result >= 0 && nums[start - result] === target) return result
    result += 1
  }
}

const cases: [number[], number, number][] = [
  [[1, 2, 3, 4, 5], 5, 3],
  [[1], 1, 0],
  [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0],
]
for (const [nums, target, start] of cases) console.log(getMinDistance(nums, target, start))