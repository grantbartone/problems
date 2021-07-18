/**
 * July 17 Leetcode Contest - https://leetcode.com/contest/weekly-contest-250/problems/maximum-number-of-words-you-can-type/
 * 5161. Maximum Number of Words You Can Type
 * 
 * Time: O(); Space: O(N)
 */
function canBeTypedWords(text: string, brokenLetters: string): number {
  const hasBrokenLetters = (word: string): boolean => {
    const letters = new Set(word)
    for (const letter of brokenLetters.split('')) {
      if (letters.has(letter)) return true
    }
    return false
  }

  let count = 0
  for (const word of text.split(' ')) {
    if (!hasBrokenLetters(word)) count += 1
  }
  return count
}

const cases: [string, string][] = [
  ["hello world", "ad"],
  ["leet code", "lt"],
  ["leet code", "e"],
]
for (const [text, brokenLetters] of cases) console.log(canBeTypedWords(text, brokenLetters))