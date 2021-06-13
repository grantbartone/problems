/**
 * June 12th Leetcode Contest - 5784. Redistribute Characters to Make All Strings Equal
 * https://leetcode.com/contest/weekly-contest-245/problems/redistribute-characters-to-make-all-strings-equal/
 * 
 * Time: O(N); Space: O(N)
 */
function makeEqual(words: string[]): boolean {
  if (words.length < 2) return true

  const letters: { [index: string]: number } = {}
  words.map(word => {
    word.split('').map(A => {
      letters[A] = letters[A] || 0
      letters[A] += 1
    })
  })

  const values = []
  for (const key in letters) values.push(letters[key])

  return values.every(a => a % words.length === 0)
}

const cases: string[][] = [
  ["abc", "aabc", "bc"],
  ["ab", "a"],
  ["a", "b"],
  ["abbab"],
  ["caaaaa", "aaaaaaaaa", "a", "bbb", "bbbbbbbbb", "bbb", "cc", "cccccccccccc", "ccccccc", "ccccccc", "cc", "cccc", "c", "cccccccc", "c"],
]
for (const words of cases) console.log(makeEqual(words))