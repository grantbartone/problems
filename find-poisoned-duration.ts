/**
 * September Leetcoding Challenge - Day 26
 * https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/557/week-4-september-22nd-september-28th/3473/
 * 
 * Time: O(N); Space: O(1)
 */
function findPoisonedDuration(timeSeries: number[], duration: number): number {
    if (timeSeries.length < 2) return timeSeries.length === 1 ? duration : 0
    
    let poisoned: number = duration
    for (let i = 1, endtime: number = timeSeries[0] + duration; i < timeSeries.length; i += 1) {
        const overlap: number = endtime > timeSeries[i] ? endtime - timeSeries[i] : 0
        poisoned += duration - overlap
        endtime = timeSeries[i] + duration
    }
    return poisoned
};

// TEST CASES
(function() {
    const tests: [ number[], number ][] = [
        [[1,2,4,5], 2],
        [[1,2,3,4], 10],
        [[1], 2],
        [[], 2],
    ]
    for (const [timeSeries, duration] of tests)
        console.log(findPoisonedDuration(timeSeries, duration))
})()
