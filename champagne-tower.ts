/**
 * October Leetcoding Challenge - Day 26
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3508/
 * 
 * Time: O(N); Space: O(N)
 */
function champagneTower(poured: number, query_row: number, query_glass: number): number {
    const pyramid: number[][] = Array(query_row + 2).fill([]).map((row, idx) => Array(idx + 1).fill(0))
    pyramid[0][0] = poured
    
    for (let row = 0; row < pyramid.length; row += 1) {
        for (let glass = 0; glass < pyramid[row].length; glass += 1) {
            if (pyramid[row][glass] > 1) {
                const overpour = pyramid[row][glass] - 1
                pyramid[row][glass] = 1
                
                pyramid[row + 1][glass] += overpour / 2
                pyramid[row + 1][glass + 1] += overpour / 2
            }
            
            if (query_row === row && query_glass === glass) return pyramid[row][glass]
        }
    }
    
    // It should return before reaching this
    return pyramid[query_row][query_glass]
}

// EXAMPLE TEST CASES
(function() {
    const tests: number[][] = [
        [ 1, 1, 1 ],
        [ 2, 1, 1 ],
        [ 100000009, 33, 17 ],
    ]
    for (const [poured, query_row, query_glass] of tests)
        console.log(champagneTower(poured, query_row, query_glass))
})()