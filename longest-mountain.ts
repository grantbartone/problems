/**
 * November Leetcoding Challenge - Day 16
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/566/week-3-november-15th-november-21st/3533/
 * 
 * Time: O(N); Space: O(1)
 */
function longestMountain(A: number[]): number {
  if (A.length < 3) return 0

  let max = 0
  for (let left = 0, right = 1; right < A.length; left = right, right += 1) {
    if (A[left] >= A[right]) continue

    while (right + 1 < A.length && A[right + 1] > A[right]) right += 1
    while (right + 1 < A.length && A[right + 1] < A[right]) right += 1

    if (A[right] >= A[right - 1]) continue
    max = Math.max(max, right - left + 1)
  }
  return max
}


// TESTS
const cases: number[][] = [
  [1, 2],
  [0, 2, 2],
  [2, 1, 4, 7, 3, 2, 5],
  [2, 2, 2],
  [0, 1, 2, 3, 4, 5, 4],
  [0, 10, 0, 1, 2, 3, 4, 5, 4],
  [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
]
for (const A of cases) console.log(longestMountain(A))