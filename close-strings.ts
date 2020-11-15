/**
 * November Leetcoding Contest - Weekly Contest 215 - 5603. Determine if Two Strings Are Close
 * https://leetcode.com/contest/weekly-contest-215/problems/determine-if-two-strings-are-close/
 * 
 * Time: O(N); Space: O(N)
 */
function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length || new Set(word1).size !== new Set(word2).size) return false

  const counts: { [index: string]: [number, number] } = {}
  for (let i = 0; i < word1.length; i += 1) {
    counts[word1[i]] = counts[word1[i]] || Array(2).fill(0)
    counts[word2[i]] = counts[word2[i]] || Array(2).fill(0)
    counts[word1[i]][0] += 1
    counts[word2[i]][1] += 1
  }

  const pairs: { [index: number]: number } = {}
  for (const letter in counts) {
    if (counts[letter][0] === 0 || counts[letter][1] === 0) return false

    pairs[counts[letter][0]] = pairs[counts[letter][0]] || 0
    pairs[counts[letter][1]] = pairs[counts[letter][1]] || 0
    pairs[counts[letter][0]] += 1
    pairs[counts[letter][1]] += 1
  }

  return Object.values(pairs).every(a => a % 2 === 0)
}

// TESTS
const cases = [
  ["abc", "bca"],
  ["a", "aa"],
  ["cabbba", "abbccc"],
  ["cabbba", "aabbss"],
  ["abbzccca", "babzzczc"],
  ["uau", "ssx"],
]
for (const [word1, word2] of cases) console.log(closeStrings(word1, word2))