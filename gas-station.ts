/**
 * September Leetcoding Challenge - Day 23
 * https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/557/week-4-september-22nd-september-28th/3470/
 * 
 * Time: O(N**2); Space: O(1)
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
    const isCompleteCircuit = (start: number) => {
        let tank = 0
        for (let j = start, count = 0; count < gas.length; j = (j + 1) % gas.length, count += 1) {
            tank += gas[j] - cost[j]
            if (tank < 0) return false // Could not travel to the next station
        }
        return true
    }
    
    for (let i = 0; i < gas.length; i += 1) {
        if (isCompleteCircuit(i)) return i
    }
    return -1
};

// TEST CASES
const tests923: number[][][] = [
    [ [1,2,3,4,5], [3,4,5,1,2] ],
    [ [2,3,4], [3,4,3] ],
]
for (const [gas, cost] of tests923) console.log(canCompleteCircuit(gas, cost))
