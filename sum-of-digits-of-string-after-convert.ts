/**
 * July 24 Leetcode Contest - https://leetcode.com/contest/weekly-contest-251/problems/sum-of-digits-of-string-after-convert/
 * 5823. Sum of Digits of String After Convert
 * 
 * Time: O(N); Space: O(N)
 */
function getLucky(s: string, k: number): number {
  const getLetterNum = (letter: string): number => letter.charCodeAt(0) - 96
  const digits = s.split('').map(letter => `${getLetterNum(letter)}`).join('')

  const getSum = (digits: string): number => digits.split('').reduce((a, b) => a + Number(b), 0)

  let sum = getSum(digits)
  while (k > 1) {
    sum = getSum(`${sum}`)
    k -= 1
  }
  return sum
}

const cases: [string, number][] = [
  ["iiii", 1],
  ["leetcode", 2],
  ["zbax", 2],
]
for (const [s, k] of cases) console.log(getLucky(s, k))