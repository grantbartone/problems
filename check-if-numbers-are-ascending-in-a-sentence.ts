/**
 * October 16 Leetcode Contest - 5902. Check if Numbers Are Ascending in a Sentence
 * https://leetcode.com/contest/weekly-contest-263/problems/check-if-numbers-are-ascending-in-a-sentence/
 * 
 * Time: O(N); Space: O(N)
 */
 function areNumbersAscending(s: string): boolean {
    let last = -1 * 10 ** 32
    for (const next of s.split(' ')) {
        if (!isNaN(+next)) continue
        if (+next <= last) return false
        last = +next
    }
    return true
}

const sentences: string[] = [
    "1 box has 3 blue 4 red 6 green and 12 yellow marbles",                 // true
    "hello world 5 x 5",                                                    // false
    "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s",   // false
"4 5 11 26",                                                                // true
]
for (const s of sentences) console.log(areNumbersAscending(s))
