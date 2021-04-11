/**
 * April 10rd Leetcode Contest - 5726. Sign of the Product of an Array
 * https://leetcode.com/contest/weekly-contest-236/problems/sign-of-the-product-of-an-array/
 * 
 * Time: O(N); Space: O(1)
 */
function arraySign(nums: number[]): number {
  const product = nums.reduce((a, b) => a * b, 1)
  return product > 0 ? 1 : product === 0 ? 0 : -1
}

const cases: number[][] = [
  [-1, -2, -3, -4, 3, 2, 1],
  [1, 5, 0, 2, -3],
  [-1, 1, -1, 1, -1],
]
for (const nums of cases) console.log(arraySign(nums))