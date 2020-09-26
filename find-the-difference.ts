/**
 * September Leetcoding Challenge - Day 24
 * https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/
 * https://leetcode.com/problems/find-the-difference/
 * 
 * Time: O(2N) => O(N); Space: O(N)
 */
function findTheDifference(s: string, t: string): string {
    const sMap: { [index: string]: number } = {}
    for (const letter of s) sMap[letter] = sMap[letter] ? sMap[letter] + 1 : 1
    for (const letter of t) {
        // if 'undefined' or zero, we've found the letter
        if (!sMap[letter]) return letter
        sMap[letter] -= 1
    }
    return ''
};

// TEST CASES
(function() {
    const tests: string[][] = [
        ["abcd", "abcde"],
        ["aabb", "aabbb"],
    ]
    for (const [s, t] of tests) console.log(findTheDifference(s,t))
})()
