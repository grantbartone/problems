/**
 * November Leetcoding Challenge - Day 12
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3528/
 * 
 * Backtracking
 * Time: O(N^2); Space: O(N)
 */
function permuteUnique(nums: number[]): number[][] {
  const counts: { [index: number]: number } = {}
  for (const x of nums) counts[x] = counts[x] ? counts[x] + 1 : 1

  const result: number[][] = []
  const recurse = (N_left: number, curr: number[]): void => {
    if (N_left === 0) {
      result.push(curr)
      return
    }

    for (const x in counts) {
      if (counts[x] > 0) {
        counts[x] -= 1
        recurse(N_left - 1, [...curr, Number(x)])
        counts[x] += 1
      }
    }
  }
  recurse(nums.length, [])

  return result
}


// TESTS
const permutations: number[][] = [
  [1, 1, 2],
  [1, 2, 3],
  [1, 1, 1],
  [1],
  [1, 2, 3, 4, 5, 6, 7, 8],
]
for (const nums of permutations) console.log(permuteUnique(nums))