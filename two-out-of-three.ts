/**
 * October 9 Leetcode Contest - https://leetcode.com/contest/weekly-contest-262/problems/two-out-of-three/
 * 5894. Two Out of Three
 * 
 * Time: O(N); Space: O(N)
 */
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const nums = [new Set(nums1), new Set(nums2), new Set(nums3)]

  const counts: {[index: string]: number} = {}
  for (const set of nums) {
    for (const item of set.values()) {
      counts[item] = counts[item] || 0
      counts[item] += 1
    }
  }
  
  const result: number[] = []
  for (const key in counts) {
    if (counts[key] > 1) result.push(+key)
  }
  return result
}

const cases: [number[], number[], number[]][] = [
  [[1,1,3,2], [2,3], [3]], // [ 2, 3 ]    
  [[3,1], [2,3], [1,2]],   // [ 1, 2, 3 ]
  [[1,2,2], [4,3,3], [5]], // []
]
for (const [nums1, nums2, nums3] of cases) console.log(twoOutOfThree(nums1, nums2, nums3))
