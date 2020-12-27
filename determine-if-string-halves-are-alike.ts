/**
 * Leetcode Weekly Contest 221 - 5637. Determine if String Halves Are Alike
 * https://leetcode.com/contest/weekly-contest-221/problems/determine-if-string-halves-are-alike/
 * 
 * Time: O(N); Space: O(N)
 */
function halvesAreAlike(s: string): boolean {
  const [a, b] = [s.substr(0, s.length / 2), s.substr(s.length / 2)]
  return countVowels(a) === countVowels(b)
}

function countVowels(halfS: string): number {
  return halfS
    .split('')
    .filter(char => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase()))
    .length
}

const tests: string[] = [
  "book",
  "textbook",
  "MerryChristmas",
  "AbCdEfGh",
]
for (const s of tests) console.log(halvesAreAlike(s))