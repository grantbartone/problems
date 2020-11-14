/**
 * November Leetcoding Challenge - Day 14
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3530/
 * 
 * Time: O(Log N); Space: O(1)
 */
function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {
  if (buckets === 1) return 0

  const maxIterations = Math.floor(minutesToTest / minutesToDie)
  const canFindPoison = (pigs: number): boolean => {
    const bucketsPerIteration = 2 ** pigs - 1
    const iterations = Math.floor(
      (buckets + bucketsPerIteration - 2) / bucketsPerIteration
    )
    if (iterations * minutesToDie <= minutesToTest) return true

    return (maxIterations + 1) ** pigs >= buckets
  }

  let left = 1, right = buckets
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (canFindPoison(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}


// TESTS
const cases: number[][] = [
  [1000, 15, 60],
  [1, 1, 1,],
  [4, 15, 30],
]
for (const [pigs, minutesToDie, minutesToTest] of cases)
  console.log(poorPigs(pigs, minutesToDie, minutesToTest))