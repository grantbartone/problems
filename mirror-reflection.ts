/**
 * November Leetcoding Challenge - Day 17
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/566/week-3-november-15th-november-21st/3534/
 * 
 * Time: O(1); Space: O(1)
 */

function mirrorReflection(p: number, q: number): number {
  if (q === 0) return 0
  if (p === 0) return 2

  // Get the Least Common Multiple
  const lcm = p * q / greatestCommonDivisor(p, q)
  if ((lcm / p) % 2 === 0) return 0
  if ((lcm / q) % 2 === 0) return 2
  return 1
}

function greatestCommonDivisor(a: number, b: number): number {
  if (!b) return a
  return greatestCommonDivisor(b, a % b)
}

// TEST CASES
const cases: [number, number][] = [
  [2, 1],
  [10, 1],
  [10, 2],
  [10, 3],
  [10, 4],
  [10, 5],
  [10, 8],
  [10, 10],
]
for (const [p, q] of cases) console.log(mirrorReflection(p, q))