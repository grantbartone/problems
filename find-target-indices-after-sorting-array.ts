/**
 * November 27th Leetcode Contest - 5938. Find Target Indices After Sorting Array
 * https://leetcode.com/contest/weekly-contest-269/problems/find-target-indices-after-sorting-array/
 * 
 * Time: O(N Log N); Space: O(1)
 */

function targetIndices(nums: number[], target: number): number[] {
  const result = []
  nums.sort((a, b) => a - b).map((a, i) => a === target && result.push(i))
  return result
}

const cases: [number[], number][] = [
  [[1,2,5,2,3], 2],
  [[1,2,5,2,3], 3],
  [[1,2,5,2,3], 5],
  [[1,2,5,2,3], 4],
]
for (const [nums, target] of cases) console.log(targetIndices(nums, target))
