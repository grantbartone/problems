/**
 * June 26 Leetcode Contest - https://leetcode.com/contest/weekly-contest-247/problems/number-of-wonderful-substrings/
 * 5799. Number of Wonderful Substrings
 * 
 * Time: O(N^2); Space: O(N) --> TLE :( Time Limit Exceeded )
 */
function wonderfulSubstrings(word: string): number {
  let count = 0

  for (let i = 0; i < word.length; i += 1) {
    for (let j = 1; j < word.length - i + 1; j += 1) {
      const curr = word.substr(i, j)
      if (isWonderful(curr)) count += 1
    }
  }

  return count
}

const isWonderful = (word: string): boolean => {
  const letters = word.split('')

  const counts = {}
  while (letters.length > 0) {
    const curr = letters.shift()
    counts[curr] = counts[curr] || 0
    counts[curr] += 1
  }

  const isOdd = (a: number) => a % 2 !== 0

  let hasOneOdd = false
  for (const key in counts) {
    if (isOdd(counts[key])) {
      if (hasOneOdd) return false
      hasOneOdd = true
    }
  }

  return true
}

const words: string[] = [
  "aba",
  "aabb",
  "he",
  "bibacdfehgbchbjicccecacbdeiggideciijgbahifjjhdeddeabbfihbegbagcgbidefijigabfjhbdjfiihggdbjacgjccidedajgaabdibcdfjfjfeifefdeachbcbdadggiagbdfigjadeaadfbadhfjgifeeaagiabddicdejcgaejcdgffggdddffideijchchaffgjhfeaffhbfahieggdahdbeijfjbeaciagfjjbcjdbjgdfeefbgjfhcbajbdghgeieiahadebeiabjedjhbfbhfhajcieibaejefbfeihebbjgciceibbabddcaeehdfdhbeeeffdijfghdfeedfcccfchjhdjddfgehiccdggbdjjghicagdhceiaebfhjhbefghjjcbjbjbfbbdhhdbdbceejaffbdbidaefihcjagaibhihbebhjfggbddhedfcacagegfaiiaeheiggjhfaegffdicgebabceaahjeegafgjgfejfeheafidabjbgafjcdgffdafcgecjdjefcbhefbfghgegfegdabjiicihfdbjjiehjfbjfhgaeacjgfbggggjegffgbabafdhbbiadgfcbfcicjagceeibhagieiddjjhcjdidccgjfbgihadhhjihgdaheibigihefacfbdgfiefehgjbbcggccfcibhbhhjjagjhehciejafbhjeicaieagjagdaaaddfgiibgicgjghdjiddaeihbcbccbfjigdjcachhdcgfheaacfhfajefbccgjcdcaahjaaedcibbjgggajaceijababjafbaccfiffcbedjc",
]
for (const word of words) console.log(wonderfulSubstrings(word))