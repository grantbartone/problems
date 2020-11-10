/**
 * November Leetcoding Challenge - Day 10
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3526/
 * 
 * Time: O(N); Space: O(1)
 */
function flipAndInvertImage(A: number[][]): number[][] {
  const invert = (num: number): number => num === 1 ? 0 : 1

  // Flip and Invert each row in a single pass
  for (const row of A) {
    for (let lo = 0, hi = row.length - 1; lo <= hi; lo += 1, hi -= 1) {
      const tmp = row[lo]
      row[lo] = invert(row[hi])

      // Break if it's the middle number of odd-length row, otherwise continue
      if (lo === hi) break
      row[hi] = invert(tmp)
    }
  }
  return A
}


// TESTS
const images: number[][][] = [
  [[1, 1, 0], [1, 0, 1], [0, 0, 0]],
  [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]],
]
for (const A of images) console.log(flipAndInvertImage(A))