/**
 * November Leetcoding Challenge - Day 29
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/568/week-5-november-29th-november-30th/3548/
 * 
 * Time: O(N); Space: O(N)
 */
function canReach(arr: number[], start: number): boolean {
  const queue: number[] = [], visited = new Set([start])
  if (start + arr[start] < arr.length) queue.push(start + arr[start])
  if (start - arr[start] >= 0) queue.push(start - arr[start])

  while (queue.length > 0) {
    const curr = queue.shift()
    if (arr[curr] === 0) return true
    if (visited.has(curr)) continue
    visited.add(curr)

    if (curr + arr[curr] < arr.length && !queue.includes(curr + arr[curr]))
      queue.push(curr + arr[curr])
    if (curr - arr[curr] >= 0 && !queue.includes(curr - arr[curr]))
      queue.push(curr - arr[curr])
  }
  return false
}


// Test cases
const cases: [number[], number][] = [
  [[4, 2, 3, 0, 3, 1, 2], 5],
  [[4, 2, 3, 0, 3, 1, 2], 0],
  [[3, 0, 2, 1, 2], 2],
  [[3, 0, 1, 2], 0],
  [[1, 1, 1, 1, 1, 1, 1, 1, 0], 3],
]
for (const [arr, start] of cases) console.log(canReach(arr, start))