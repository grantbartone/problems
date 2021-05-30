/**
 * May 29nd Leetcode Contest - 5772. Check if Word Equals Summation of Two Words
 * https://leetcode.com/contest/weekly-contest-243/problems/check-if-word-equals-summation-of-two-words/
 * 
 * Time: O(N); Space: O(1)
 */
function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
  return wordValue(firstWord) + wordValue(secondWord) === wordValue(targetWord)
}

function wordValue(word: string): number {
  const letterValue = (letter: string): number => letter.charCodeAt(0) - 97

  const value: string = word.split('').reduce((a, b) => a + letterValue(b), '')
  return Number(value)
}

const cases: [string, string, string][] = [
  ["acb", "cba", "cdb"],
  ["aaa", "a", "aab"],
  ["aaa", "a", "aaaa"],
  ["j", "j", "bi"],
]
for (const [a, b, c] of cases) console.log(isSumEqual(a, b, c))