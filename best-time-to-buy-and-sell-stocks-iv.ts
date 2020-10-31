/*
 * October Leetcoding Challenge - Day 18
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3499/
 * 
 * DP + "quickSolve" to handle corner cases resulting in TLE
 * Time: O(N); Space: O(K * N)
*/
function maxProfit(k: number, prices: number[]): number {
    if (k >= Math.floor(prices.length / 2)) return quickSolve(prices)

    const t: number[][] = Array(k + 1).fill(0).map((a) => Array(prices.length).fill(0))
    for (let i = 1; i <= k; i += 1) {
        let tmpMax = -prices[0]
        for (let j = 1; j < prices.length; j += 1) {
            t[i][j] = Math.max(t[i][j - 1], prices[j] + tmpMax)
            tmpMax = Math.max(tmpMax, t[i - 1][j - 1] - prices[j])
        }
    }
    return t[k][prices.length - 1]
}

const quickSolve = (prices: number[]): number => {
    let profit = 0
    for (let i = 1; i < prices.length; i += 1) {
        if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1]
    }
    return profit
}

// TEST CASES
(function () {
    const tests: [number, number[]][] = [
        [2, [2, 4, 1]],
        [2, [3, 2, 6, 5, 0, 3]],
    ]
    for (const [k, prices] of tests) console.log(maxProfit(k, prices))
})()