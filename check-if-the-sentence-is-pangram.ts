/**
 * April 17rd Leetcode Contest - 5734. Check if the Sentence Is Pangram
 * https://leetcode.com/contest/weekly-contest-237/problems/check-if-the-sentence-is-pangram/
 * 
 * Time: O(N); Space: O(N)
 */
function checkIfPangram(sentence: string): boolean {
  if (sentence.length < 26) return false

  const arr = new Array(26).fill(false)
  sentence.split('').map(letter => arr[letter.charCodeAt(0) - 97] = true)
  return !arr.filter(a => a === false).length
}

const cases: string[] = [
  "thequickbrownfoxjumpsoverthelazydog",
  "leetcode",
]
for (const sentence of cases) console.log(checkIfPangram(sentence))