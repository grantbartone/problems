/**
 * April 3rd Leetcode Contest - 5722. Truncate Sentence
 * https://leetcode.com/contest/weekly-contest-235/problems/truncate-sentence/
 * 
 * Time: O(N); Space: O(1)
 */
function truncateSentence(s: string, k: number): string {
  return s.split(' ').filter((word, i) => i < k).join(' ')
}

const cases: [string, number][] = [
  ["Hello how are you Contestant", 4],
  ["What is the solution to this problem", 4],
  ["chopper is not a tanuki", 5],
]
for (const [s, k] of cases) console.log(truncateSentence(s, k))