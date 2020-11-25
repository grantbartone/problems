/**
 * November Leetcoding Challenge - Day 25
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/567/week-4-november-22nd-november-28th/3543/
 * 
 * Time: O(K); Space: O(1)
 */
function smallestRepunitDivByK(K: number): number {
  let curr = 1 % K, len = 1
  const seen = new Set([curr])
  while (true) {
    if (curr === 0) return len

    curr = (curr * 10 + 1) % K
    if (seen.has(curr)) return -1
    seen.add(curr)
    len += 1
  }
}


// TEST CASES
const cases: number[] = [1, 2, 3, 5, 7, 9, 11, 13]
for (const K of cases) console.log(smallestRepunitDivByK(K))