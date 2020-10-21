/*
 * Leetcode Weekly Contest 211 - October 17, 2020
 * https://leetcode.com/contest/weekly-contest-211/problems/best-team-with-no-conflicts/
 * 
 * DP
 * Time: O(N); Space: O(N^2)
*/
function bestTeamScore(scores: number[], ages: number[]): number {
    const dp: number[] = []
    const players: { score: number, age: number }[] = scores
        .map((a, idx) => ({ score: a, age: ages[idx]}))
        .sort((a, b) => a.age === b.age ? a.score - b.score : a.age - b.age)
    
    let max = 0
    for (let i = 0; i < players.length; i += 1) {
        dp.push(players[i].score)
        for (let j = 0; j < i; j += 1) {
            if (players[j].score <= players[i].score) {
                dp[i] = Math.max(dp[i], dp[j] + players[i].score)
            }
        }
        max = Math.max(max, dp[i])
    }
    return max
}

// TEST CASES
(function() {
    const tests: [ number[], number[] ][] = [
        [ [1,3,5,10,15], [1,2,3,4,5] ],
        [ [4,5,6,5], [2,1,2,1] ],
        [ [1,2,3,5], [8,9,10,1] ],
        [ [9,2,8,8,2], [4,1,3,3,5] ],
    ]
    for (const [scores, ages] of tests) console.log(bestTeamScore(scores, ages))
  })()