/**
 * November Leetcoding Challenge - Day 11
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3527/
 * 
 * Time: O(N); Space: O(N)
 */
function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
  const distances: number[] = [
    getDistance(p1, p2),
    getDistance(p2, p3),
    getDistance(p3, p4),
    getDistance(p1, p4),
    getDistance(p1, p3),
    getDistance(p2, p4),
  ]
  const min = Math.min(...distances)

  let count = 0
  for (const d of distances) if (d === min) count += 1
  return count === 4
}

function getDistance(p1: number[], p2: number[]): number {
  const [x1, y1] = p1, [x2, y2] = p2
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}


// TEST CASE
const [p1, p2, p3, p4]: number[][] = [[0, 0], [1, 1], [1, 0], [0, 1]]
console.log(validSquare(p1, p2, p3, p4))