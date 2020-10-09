# Biweekly Contest 36 - 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period
# https://leetcode.com/contest/biweekly-contest-36/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/
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