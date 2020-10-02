/**
 * October Leetcoding Challenge - Day 2
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3481/
 * 
 * Time: O(N Log N); Space: O(N)
 */
function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = []

    // Recurse through the sorted candidates list & return the result
    findNumbers(candidates.sort((a,b) => a - b), target, result, [], 0)
    return result
};

function findNumbers(candidates: number[], target: number, result: number[][], r: number[], i: number) {
    if (target < 0) return
    if (target === 0) return result.push([...r])

    while (i < candidates.length && target - candidates[i] >= 0) {
        r.push(candidates[i])
        findNumbers(candidates, target - candidates[i], result, r, i)
        i += 1
        
        // Backtrack & remove the last number from the list
        r.pop()
    }
};

// TEST CASES
(function() {
    const tests: [ number[], number ][] = [
        [ [2,3,6,7], 7 ],
        [ [2,3,5], 8 ],
        [ [2], 1 ],
        [ [1], 1 ],
        [ [1], 2 ],
    ]
    for (const [candidates, target] of tests) console.log(combinationSum(candidates, target))
})()