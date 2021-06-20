/**
 * June 19 Leetcode Contest - https://leetcode.com/contest/weekly-contest-246/problems/largest-odd-number-in-string/
 * 5788. Largest Odd Number in String
 * 
 * Time: O(N); Space: O(1)
 */
function largestOddNumber(num: string): string {
  if (isNaN(Number(num))) return "'num' must consist of values from 0 to 9 only"

  const isOdd = (num: string): boolean => Number(num) % 2 === 1
  while (num.length > 0) {
    const last = num[num.length - 1]
    if (isOdd(last)) return '"' + num + '"'
    num = num.substring(0, num.length - 1)
  }
  return '""'
}

const numStrings: string[] = [
  "52",
  "4206",
  "35427",
  "hi",
]
for (const num of numStrings) console.log(largestOddNumber(num))