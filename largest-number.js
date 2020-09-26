/**
 * September Leetcoding Challenge - Day 25
 * https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/557/week-4-september-22nd-september-28th/3472/
 * 
 * @param {number[]} nums
 * @return {string}
 * 
 * Time: O(N Log N); Space: O(1)
 */
var largestNumber = function(nums) {
    if (nums.length === 0) return ''
    if (nums.filter((a) => a !== 0).length === 0) return '0'
    return nums
        .sort((a,b) => (`${b}` + `${a}` ) - (`${a}` + `${b}`))
        .reduce((acc, curr) => acc + `${curr}`, '')
}

 // TEST CASES
(function(){
    const tests = [
        [5,50,505,51,9,94,90,99,0,0,0],
        [3,30,34,5,50,505,9,94],
        [3,30,34,5,9],
        [10,2],
        [0,0],
    ]
    for (const nums of tests) console.log(largestNumber(nums))
})()
