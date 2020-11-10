/**
 * November Leetcoding Challenge - Day 10
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3526/
 * 
 * Time: O(N); Space: O(1)
 */
function flipAndInvertImage(A: number[][]): number[][] {
  for (const row of A) {
    flip(row)
    invert(row)
  }
  return A
}

const flip = (row: number[]): void => {
  for (let lo = 0, hi = row.length - 1; lo < hi; lo += 1, hi -= 1) {
    const tmp = row[lo]
    row[lo] = row[hi]
    row[hi] = tmp
  }
}

const invert = (row: number[]): void => {
  for (let i = 0; i < row.length; i += 1) {
    row[i] = row[i] === 1 ? 0 : 1
  }
}


// TESTS
const images: number[][][] = [
  [[1, 1, 0], [1, 0, 1], [0, 0, 0]],
  [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]],
]
for (const A of images) console.log(flipAndInvertImage(A))