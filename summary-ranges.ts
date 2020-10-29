/**
 * September Leetcoding Challenge - Day 28
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3510/
 * 
 * Time: O(N); Space: O(1)
 */
function summaryRanges(nums: number[]): string[] {
    if (nums.length < 2) return nums.length ? [ `${nums[0]}` ] : []
    
    const result: string[] = []
    for (let i = 0; i < nums.length; i += 1) {
        const start = nums[i]
        while (i + 1 < nums.length && (nums[i + 1] - nums[i] === 1)) i += 1
        if (start !== nums[i])
            result.push(`${start}->${nums[i]}`)
        else
            result.push(`${nums[i]}`)
    }
    return result
}

(function(){
    const tests: number[][] = [
        [0,1,2,4,5,7],
        [0,2,3,4,6,8,9],
        [],
        [0],
        [-1],
    ]
    for (const nums of tests) console.log(summaryRanges(nums))
})()