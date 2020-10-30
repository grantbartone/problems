/**
 * October Leetcoding Challenge - Day 30 - Number of Longest Increasing Subsequence
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/563/week-5-october-29th-october-31st/3513/
 * 
 * DP Solution
 * Time: O(N); Space: O(1)
 */
function findNumberOfLIS(nums: number[]): number {
  // Length (len) and Count (cnt) of Longest Increasing Subsequence ending at nums[i]
  const len: number[] = Array(nums.length), cnt: number[] = Array(nums.length)
  let result = 0, max = 0
  for (let i = 0; i < nums.length; i += 1) {
    len[i] = cnt[i] = 1
    for (let j = 0; j < i; j += 1) {
      if (nums[i] > nums[j]) {
        if (len[i] === len[j] + 1)
          cnt[i] += cnt[j]
        else if (len[i] < len[j] + 1) {
          len[i] = len[j] + 1
          cnt[i] = cnt[j]
        }
      }
    }

    if (max === len[i])
      result += cnt[i]
    else if (max < len[i]) {
      max = len[i]
      result = cnt[i]
    }
  }
  return result
}

/* TESTS */
const tests: number[][] = [
  [1, 3, 5, 4, 7],
  [2, 2, 2, 2, 2],
  [1, 2, 4, 3, 5, 4, 7, 2]
]
for (const nums of tests) console.log(findNumberOfLIS(nums))