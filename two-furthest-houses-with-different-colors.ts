/**
 * November 20th Leetcode Contest - 5930. Two Furthest Houses With Different Colors
 * https://leetcode.com/contest/weekly-contest-268/problems/two-furthest-houses-with-different-colors/
 * 
 * Time: O(N^2); Space: O(1)
 */

function maxDistance(colors: number[]): number {
  let max = 0
  for (let i = 0; i < colors.length; i += 1) {
    for (let j = colors.length - 1; j > i; j -= 1) {
      if (colors[i] !== colors[j]) {
        max = Math.max(max, j - i)
        break
      }
    }
  }
  return max
}

const cases: number[][] = [
  [1,1,1,6,1,1,1],
  [1,8,3,8,3],
  [0,1],
]
for (const colors of cases) console.log(maxDistance(colors))
