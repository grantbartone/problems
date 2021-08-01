/**
 * July 31 Leetcode Contest - https://leetcode.com/contest/weekly-contest-252/problems/three-divisors/
 * 5830. Three Divisors
 * 
 * Time: O(N); Space: O(N)
 */
function isThree(n: number): boolean {
  if (n < 4) return false
  if (n === 4) return true

  const isEven = (num: number): boolean => num % 2 === 0
  if (isEven(n)) return false

  const isSqrtInteger = (num: number): boolean => num === Math.floor(num)
  const sqrt = Math.sqrt(n)
  if (isSqrtInteger(sqrt)) return !isSqrtInteger(Math.sqrt(sqrt))

  return false
}

const cases: number[] = [
  2, // false
  3, // false
  4, // true
  5, // false
  9, // true
  16, // false
  25, // true
  81, // false
]
for (const n of cases) console.log(n, isThree(n))