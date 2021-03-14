/**
 * March 13th Leetcode Contest - 5701. Check if One String Swap Can Make Strings Equal
 * https://leetcode.com/contest/weekly-contest-232/problems/check-if-one-string-swap-can-make-strings-equal/
 * 
 * Time: O(N); Space: O(1)
 */
function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true

  let result = false, diffs = 0
  let s1diff, s2diff
  for (let i = 0; i < s1.length; i += 1) {
    if (s1[i] !== s2[i]) {
      if (diffs > 2) return false
      if (diffs === 1) result = s2[i] === s1diff && s1[i] === s2diff

      diffs += 1
      s1diff = s1[i]
      s2diff = s2[i]
    }
  }
  return result
}

const cases: [string, string][] = [
  ["bank", "kanb"],
  ["attack", "defend"],
  ["kelb", "kelb"],
  ["abcd", "dcba"],
  ["banksy", "kanbys"],
]
for (const [s1, s2] of cases) console.log(areAlmostEqual(s1, s2))