/**
 * November Leetcoding Challenge - Day 3
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3518/
 * 
 * Time: O(N); Space: O(1)
 */
function maxPower(s: string): number {
  let max = 1
  for (let i = 0; i < s.length; i += 1) {
    let power: number = 1
    for (let j = i + 1; j < s.length; j += 1) {
      if (s[j] !== s[i]) {
        i = j - 1
        break
      }

      power += 1
      max = Math.max(max, power)
    }
  }
  return max
}


// TEST CASES
const tests: string[] = [
  "leetcode",
  "abbcccddddeeeeedcba",
  "triplepillooooow",
  "hooraaaaaaaaaaay",
  "tourist",
]
for (const s of tests) console.log(maxPower(s))