/**
 * November Leetcoding Challenge - Day 18
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/566/week-3-november-15th-november-21st/3535/
 * 
 * Time: O(N Log N); Space: O(1)
 */

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  for (let i = 0; i < intervals.length; i += 1) {
    while (i + 1 < intervals.length && intervals[i][1] >= intervals[i + 1][0]) {
      intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1])
      intervals.splice(i + 1, 1)
    }
  }
  return intervals
}


// TEST CASES
const cases: [number, number][][] = [
  [[1, 3], [2, 6], [8, 10], [15, 18]],
  [[1, 3], [3, 4]],
  [[1, 4], [2, 3]],
  [[1, 4], [0, 2], [3, 5]],
]
for (const intervals of cases) console.log(merge(intervals))