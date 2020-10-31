/**
 * October Bi-weekly Content #38 - Sort Array by Increasing Frequency (LC Easy)
 * https://leetcode.com/contest/biweekly-contest-38/problems/sort-array-by-increasing-frequency/
 * 
 * Time: O(N Log N); Space: O(N)
 */
function frequencySort(nums: number[]): number[] {
  const counts: { [index: number]: number } = {}
  for (const n of nums) counts[n] = counts[n] ? counts[n] + 1 : 1

  return nums
    .map((a) => [a, counts[a]])
    .sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1])
    .map((a) => a[0])
};

// TESTS
const tests: number[][] = [
  [1, 1, 2, 2, 2, 3],
  [2, 3, 1, 3, 2],
  [-1, 1, -6, 4, 5, -6, 1, 4, 1],
]
for (const nums of tests) console.log(frequencySort(nums))