/**
 * November Leetcoding Challenge - Day 20
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/566/week-3-november-15th-november-21st/3537/
 * 
 * Time: O(Log N); Space: O(1)
 */
function search(nums: number[], target: number): boolean {
  let lo = 0, hi = nums.length - 1
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    if (nums[mid] === target) return true

    if (nums[lo] === nums[mid] && nums[hi] === nums[mid]) {
      lo += 1
      hi -= 1
    } else if (nums[lo] <= nums[mid]) {
      if (nums[lo] <= target && nums[mid] > target) hi = mid - 1
      else lo = mid + 1
    } else {
      if (nums[hi] >= target && nums[mid] < target) lo = mid + 1
      else hi = mid - 1
    }
  }
  return false
}


// TEST CASES
const cases: [number[], number][] = [
  [[2, 5, 6, 0, 0, 1, 2], 0],
  [[2, 5, 6, 0, 0, 1, 2], 3],
  [[6, 7, 8, 9, 9, 0, 0, 1, 2, 2, 3, 4, 5], 5],
  [[6, 7, 9, 9, 0, 0, 1, 2, 2, 3, 4, 5], 8],
]
for (const [nums, target] of cases) console.log(search(nums, target))