/**
 * June 26 Leetcode Contest - https://leetcode.com/contest/weekly-contest-247/problems/maximum-product-difference-between-two-pairs/
 * 1913. Maximum Product Difference Between Two Pairs
 * 
 * Time: O(N Log N); Space: O(1)
 */
function maxProductDifference(nums: number[]): number {
  nums.sort((a, b) => a - b)
  return nums.pop() * nums.pop() - nums.shift() * nums.shift()
}

const cases: number[][] = [
  [5, 6, 2, 7, 4],
  [4, 2, 5, 9, 7, 4, 8],
]
for (const nums of cases) console.log(maxProductDifference(nums))