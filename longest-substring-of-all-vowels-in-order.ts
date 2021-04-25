/**
 * April 24th Leetcode Contest - 5740. Longest Substring Of All Vowels in Order
 * https://leetcode.com/contest/weekly-contest-238/problems/longest-substring-of-all-vowels-in-order/
 * 
 * Time: O(N); Space: O(1)
 */
function longestBeautifulSubstring(word: string): number {
  const hasAllVowels = (subWord: string): boolean => new Set(subWord).size === 5

  let start = 0, end = 1, max = 0
  while (end < word.length) {
    while (word[end] >= word[end - 1]) end += 1
    if (hasAllVowels(word.slice(start, end))) max = Math.max(max, end - start)
    start = end
    end += 1
  }
  return max
}

const cases: string[] = [
  "aeiaaioaaaaeiiiiouuuooaauuaeiu",
  "aeeeiiiioooauuuaeiou",
  "a",
]
for (const word of cases) console.log(longestBeautifulSubstring(word))