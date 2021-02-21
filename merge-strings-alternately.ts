/**
 * February 23rd Leetcode Contest - 5685. Merge Strings Alternately
 * https://leetcode.com/contest/weekly-contest-229/problems/merge-strings-alternately/
 * 
 * Time: O(N); Space: O(N)
 */
function mergeAlternately(word1: string, word2: string): string {
  let result = ''
  while (word1.length || word2.length) {
    if (!word1.length) return result + word2
    if (!word2.length) return result + word1
    result += word1[0]
    result += word2[0]
    word1 = word1.substr(1)
    word2 = word2.substr(1)
  }
  return result
}

const cases: string[] = [
  "abc",
  "pqr",
  "ab",
  "pqrs",
  "abcd",
  "pq",
]
while (cases.length) console.log(mergeAlternately(cases.shift(), cases.shift()))