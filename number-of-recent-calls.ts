/**
 * October Leetcoding Challenge - Day 1
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3480/
 * https://leetcode.com/problems/number-of-recent-calls/
 * 
 * Time: O(3000) => O(1); Space: O(3000) => O(1)
 */
class RecentCounter {
    stack: number[]
    
    constructor() {
        this.stack = []
    }

    ping(t: number): number {
        this.stack.push(t)
        while (this.stack[0] < t - 3000) this.stack.shift()
        return this.stack.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// TEST CASES
(function() {
    const tests: any[][][] = [
        [
            ["RecentCounter","ping","ping","ping","ping"],
            [[],[1],[100],[3001],[3002]],
        ],
        [
            ["RecentCounter","ping","ping","ping","ping","ping","ping","ping","ping"],
            [[],[1],[2],[3],[4],[5],[6],[3001],[3002]],
        ],
    ]
    for (const [cmd, pings] of tests) {
        if (cmd.length !== pings.length) return console.log("Error: Input lengths do not match")
        let obj
        for (let i = 0; i < cmd.length; i += 1) {
            switch (cmd[i]) {
                case "RecentCounter":
                    obj = new RecentCounter()
                    break
                case "ping":
                    if (!obj) return console.log("Error: RecentCounter not instantiated")
                    console.log(obj.ping(pings[i]))
            }
        }
    }
})()