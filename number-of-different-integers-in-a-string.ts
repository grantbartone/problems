/**
 * March 27th Leetcode Contest - 5713. Number of Different Integers in a String
 * https://leetcode.com/contest/weekly-contest-234/problems/number-of-different-integers-in-a-string/
 * 
 * Time: O(N); Space: O(1)
 */
function numDifferentIntegers(word: string): number {
  return new Set(word
    .split('')
    .map(char => isNaN(Number(char)) ? ' ' : char)
    .join('')
    .split(' ')
    .filter(a => a !== '')
    .map(a => Number(a))
  ).size
}

const cases: string[] = [
  "a123bc34d8ef34",
  "leet1234code234",
  "a1b01c001",
]
for (const word of cases) console.log(numDifferentIntegers(word))