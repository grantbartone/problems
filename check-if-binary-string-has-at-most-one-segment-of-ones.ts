/**
 * March 6th Leetcode Contest - 1784. Check if Binary String Has at Most One Segment of Ones
 * https://leetcode.com/contest/weekly-contest-231/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
 * 
 * Time: O(N); Space: O(1)
 */
function checkOnesSegment(s: string): boolean {
  let i = 0
  while (i < s.length && s[i] === '1') i += 1
  if (i === s.length) return true

  while (i < s.length && s[i] === '0') i += 1
  return i === s.length
}

const cases: string[] = [
  "1001",
  "110",
]
for (const s of cases) console.log(checkOnesSegment(s))