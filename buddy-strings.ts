/**
 * October Leetcoding Challenge - Day 14
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/560/week-2-october-8th-october-14th/3492/
 * 
 * Time: O(N); Space: O(N)
 */
function buddyStrings(A: string, B: string): boolean {
    if (A.length !== B.length) return false
    if (A === B && new Set(A).size < A.length) return true
    
    const diff = []
    for (let i = 0; i < A.length; i += 1)
        if (A.charAt(i) != B.charAt(i))
            diff.push(i)
    
    return diff.length === 2
        && A[diff[0]] === B[diff[1]]
        && A[diff[1]] === B[diff[0]]
}

// TEST CASES
(function() {
    const tests: [ string, string ][] = [
        ["ab", "ba"],
        ["ab", "ab"],
        ["aa", "aa"],
        ["aaaaaaabc", "aaaaaaacb"],
        ["", "ab"],
        ["abc", "bca"],
        ["abab", "abab"],
    ]
    for (const [A, B] of tests) console.log(buddyStrings(A, B))
})()