/**
 * November Leetcoding Challenge - Day 6
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3521/
 * 
 * Time: O(N Log N); Space: O(1)
 */
function smallestDivisor(nums: number[], threshold: number): number {
  let lo = 1, hi = 10 ** 6
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)
    const sum = nums
      .map((a) => Math.ceil(a / mid))
      .reduce((a, b) => a + b, 0)
    if (sum > threshold) lo = mid + 1
    else hi = mid
  }
  return lo
}


// TEST CASES
const tests: [number[], number][] = [
  [[1, 2, 5, 9], 6],
  [[2, 3, 5, 7, 11], 11],
  [[19], 5],
]
for (const [nums, threshold] of tests) console.log(smallestDivisor(nums, threshold))