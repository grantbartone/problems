/**
 * October Leetcoding Challenge - Day 4
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3483/
 * 
 * Time: O(N**2); Space: O(1)
 */
function removeCoveredIntervals(intervals: number[][]): number {
    let count = 0
    for (let i = 0; i < intervals.length; i += 1) {
        const [a, b] = intervals[i]
        let isCovered = false
        for (let j = 0; j < intervals.length && !isCovered; j += 1) {
            if (i === j) continue
            
            const [c, d] = intervals[j]
            if (c <= a && b <= d) isCovered = true
        }
        count += !isCovered ? 1 : 0
    }
    return count
};

// TEST CASES
(function() {
    const tests: number[][][] = [
        [[1,4],[3,6],[2,8]],
        [[1,4],[2,3]],
        [[0,10],[5,12]],
        [[3,10],[4,10],[5,11]],
        [[1,2],[1,4],[3,4]],
    ]
    for (const intervals of tests) console.log(removeCoveredIntervals(intervals))
})()