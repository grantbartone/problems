/**
 * November Leetcoding Challenge - Day 5
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3520/
 * 
 * Time: O(N); Space: O(1)
 */
function minCostToMoveChips(position: number[]): number {
  // Move all chips to the first and second positions without cost, then return the smaller cost
  const counts: [number, number] = [0, 0]
  for (const p of position) counts[p % 2] += 1
  return Math.min(...counts)
}


const chips: number[][] = [
  [1, 2, 3],
  [2, 2, 2, 3, 3],
  [1, 1000000000],
]
for (const position of chips) console.log(minCostToMoveChips(position))