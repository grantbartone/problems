/**
 * October Leetcoding Challenge - Day 29
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3510/
 * 
 * Time: O(N); Space: O(1)
 */
function maxDistToClosest(seats: number[]): number {
  let result = 0, lastSeatIdx = -1
  for (let i = 0; i < seats.length; i += 1) {
    if (seats[i] === 1) {
      result = lastSeatIdx < 0 ? i : Math.max(result, Math.floor((i - lastSeatIdx) / 2))
      lastSeatIdx = i
    }
  }
  return Math.max(result, seats.length - lastSeatIdx - 1)
}

const tests: number[][] = [
  [1, 0, 0, 0, 1, 0, 1],
  [0, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
]
for (const seats of tests) console.log(maxDistToClosest(seats))