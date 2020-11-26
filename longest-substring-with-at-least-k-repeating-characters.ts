/**
 * November Leetcoding Challenge - Day 26
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/567/week-4-november-22nd-november-28th/3544/
 * 
 * Time: O(26 * N) => O(N); Space: O(1)
 */

function longestSubstring(s: string, k: number): number {
  const maxUnique = new Set(s).size

  let max = 0
  for (let curUnique = 1; curUnique <= maxUnique; curUnique += 1) {
    const m = new Map()
    let start = 0, end = 0, atLeastK = 0, unique = 0
    while (end < s.length) {
      m.set(s[end], m.get(s[end]) + 1 || 1)
      if (m.get(s[end]) === 1) unique += 1
      if (m.get(s[end]) === k) atLeastK += 1

      while (unique > curUnique) {
        m.set(s[start], m.get(s[start]) - 1)
        if (m.get(s[start]) == k - 1) atLeastK -= 1
        if (m.get(s[start]) == 0) unique -= 1
        start += 1
      }
      if (unique === curUnique && unique === atLeastK) {
        max = Math.max(max, end - start + 1)
      }
      end += 1
    }
  }
  return max
}


// TEST CASES
const tests: [string, number][] = [
  ["aaabb", 3],
  ["ababbc", 2],
]
for (const [s, k] of tests) console.log(longestSubstring(s, k))