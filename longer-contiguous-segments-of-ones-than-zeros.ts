/**
 * May 22nd Leetcode Contest - 5763. Longer Contiguous Segments of Ones than Zeros
 * https://leetcode.com/contest/weekly-contest-242/problems/longer-contiguous-segments-of-ones-than-zeros/
 * 
 * Time: O(N); Space: O(1)
 */
function checkZeroOnes(s: string): boolean {
  const max = { '0': 0, '1': 0 }
  for (let i = 0, curr = s[0], count = 0; i < s.length; i += 1) {
    if (s[i] === curr)
      count += 1
    else {
      curr = s[i]
      count = 1
    }
    max[curr] = Math.max(max[curr], count)
  }
  return max['1'] > max['0']
}

const cases: string[] = [
  "1101",
  "111000",
  "110100010",
]
for (const s of cases) console.log(checkZeroOnes(s))