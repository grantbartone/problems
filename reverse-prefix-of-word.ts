/**
 * September 11 Leetcode Contest - https://leetcode.com/contest/weekly-contest-258/problems/reverse-prefix-of-word/
 * 5867. Reverse Prefix of Word
 * 
 * Time: O(N); Space: O(1)
 */
function reversePrefix(word: string, ch: string): string {
  let idx = 0, wordLen = word.length
  while (word[idx] != ch) {
    idx += 1
    if (idx === wordLen) return word
  }
  return word.substr(0, idx + 1).split('').reverse().join('') + word.substr(idx + 1)
}

const cases: [string, string][] = [
  ["abcdefd", "d"], // dcbaefd
  ["xyxzxe", "z"],  // zxyxxe
  ["abcd", "z"],    // abcd
]
for (const [word, ch] of cases) console.log(reversePrefix(word, ch))