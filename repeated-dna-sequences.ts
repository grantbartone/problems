/*
 * October Leetcoding Challenge - Day 17
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3498/
 * Time = O(N); Space: O(N)
 */
function findRepeatedDnaSequences(s: string): string[] {
    const counts: { [key: string]: number } = {}
    let window: string = ""
    for (const a of s.split('')) {
        window += a
        if (window.length > 10) window = window.substr(1)
        if (window.length === 10) {
            counts[window] = counts[window] ? counts[window] + 1 : 1
        }
    }
    
    const result: string[] = []
    for (const key in counts) {
        if (counts[key] > 1) result.push(key)
    }
    return result
};

// TEST CASES
(function() {
  const tests: string[] = [
    "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",
    "AAAAAAAAAAAAA",
  ]
  for (const s of tests) console.log(findRepeatedDnaSequences(s))
})()