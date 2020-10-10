# October Leetcoding Challenge - Day 8 - Binary Search
# https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/560/week-2-october-8th-october-14th/3488/
# 
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
# 
# Time: O(Log N); Space: O(1)
def search(nums, target)
    lo = 0
    hi = nums.length - 1
    while lo <= hi do
        mid = lo + (hi - lo) / 2
        if nums[mid] === target
            return mid
        elsif nums[mid] > target
            hi = mid - 1
        else
            lo = mid + 1
        end
    end
    return -1
end