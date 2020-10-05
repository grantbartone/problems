/**
 * * August Leetcoding Challenge - Day 1
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/550/week-2-august-8th-august-14th/3418/
 * 
 * Time: O(2N) => O(N); Space: O(1)
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const isSafe = (i, j) => {
        return i >= 0 && j >= 0 && i < grid.length && j < grid[0].length
    }
    
    const rotOranges = (grid) => {
        const fresh = 1
        let changed = false, rotten = 2
        while (true) {
            for (let i = 0; i < grid.length; i += 1) {
                for (let j = 0; j < grid[0].length; j += 1) {
                    if (grid[i][j] === rotten) {
                        if (isSafe(i - 1, j) && grid[i - 1][j] === 1) {
                            grid[i - 1][j] = grid[i][j] + 1
                            changed = true
                        }
                        if (isSafe(i, j + 1) && grid[i][j + 1] === 1) {
                            grid[i][j + 1] = grid[i][j] + 1
                            changed = true
                        }
                        if (isSafe(i + 1, j) && grid[i + 1][j] === 1) {
                            grid[i + 1][j] = grid[i][j] + 1
                            changed = true
                        }
                        if (isSafe(i, j - 1) && grid[i][j - 1] === 1) {
                            grid[i][j - 1] = grid[i][j] + 1
                            changed = true
                        }
                    }
                }
            }

            if (!changed) break
            changed = false
            rotten += 1
        }
        
        // Return -1 if any oranges can never rot
        for (const row of grid) {
            for (const orange of row)
                if (orange === fresh) return -1
        }
        
        return rotten - 2
    }
    return rotOranges(grid)
};

 // TEST CASES
(function(){
    const tests = [
        [[2,1,1],[1,1,0],[0,1,1]],
        [[2,1,1],[0,1,1],[1,0,1]],
        [[0,2]],
    ]
    for (const grid of tests) console.log(orangesRotting(grid))
})()
