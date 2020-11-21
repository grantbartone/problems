/**
 * November Leetcoding Challenge - Day 21
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/566/week-3-november-15th-november-21st/3538/
 */

//  Original Solution - "Time Limit Exceeded (Leetcode)"
// Time: O(N^2); Space: O(1)
function atMostNGivenDigitSet(digits: string[], n: number): number {
  let count = 0
  const recurse = (curr: string): void => {
    for (const d of digits) {
      const next = curr + d
      if (Number(next) <= Number(n)) {
        count += 1
        if (next.length < `${n}`.length) recurse(next)
      }
    }
  }
  recurse('')

  return count
}


// Optimized Solution
// Time: O(N); Space: O(1)
function atMostNGivenDigitSetv2(digits: string[], n: number): number {
  const N = `${n}`, len = N.length
  let res = 0

  // First, count numbers that have less digits than N
  for (let howManyDigits = 1; howManyDigits < len; howManyDigits += 1)
    res += digits.length ** howManyDigits

  // Then, count numbers that have same digits as N
  let extraDigit = 1
  for (let i = 0; i < len; i += 1) {
    const suitableDigits = digits.filter(d => d < N[i]).length
    res += suitableDigits * (digits.length ** (len - i - 1))

    if (!digits.includes(N[i])) {
      extraDigit = 0
      break
    }
  }

  return res + extraDigit
}


// TESTS
const tests: [string[], number][] = [
  [["7"], 8],
  [["1", "3", "5", "7"], 100],
  [["1", "4", "9"], 1000000000],
  [["1", "2", "3", "4", "5", "6", "7", "8"], 940860624],
]
for (const [digits, n] of tests) console.log(atMostNGivenDigitSetv2(digits, n))