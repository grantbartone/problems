
/**
 * February 6th Leetcode Contest - 5672. Check if Array Is Sorted and Rotated
 * https://leetcode.com/contest/weekly-contest-227/problems/check-if-array-is-sorted-and-rotated/
 * 
 * Time: O(N^2); Space: O(1)
 */
function check(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i += 1) {
    let match = true
    for (let j = 1; j < nums.length; j += 1) {
      if (nums[j] < nums[j - 1]) {
        match = false
        break
      }
    }
    if (match) return true
    nums.push(nums.shift())
  }
  return false
}

const cases: number[][] = [
  [3, 4, 5, 1, 2],
  [2, 1, 3, 4],
  [1, 2, 3],
  [1, 1, 1],
  [2, 1],
]
for (const nums of cases) console.log(check(nums))