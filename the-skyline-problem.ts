/**
 * November Leetcoding Challenge - Day 30 - The Skyline Problem
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/568/week-5-november-29th-november-30th/3549/
 * 
 * Time: O(N Log N); Space: O(N)
 */
function getSkyline(buildings: number[][]): number[][] {
  if (buildings.length === 0) return []

  const startEndHeightList: [number, number][] = []
  for (const building of buildings) {
    const [start, end, height] = building
    startEndHeightList.push([start, -height])
    startEndHeightList.push([end, height])
  }
  startEndHeightList.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])

  const result: [number, number][] = [], currHeights: number[] = [0]
  for (let i = 0, prevMaxHeight = 0; i < startEndHeightList.length; i += 1) {
    const [pos, height] = startEndHeightList[i]
    if (height < 0) {
      currHeights.push(-height)
    } else {
      const removeIdx = currHeights.indexOf(height)
      currHeights.splice(removeIdx, 1)
    }

    const currMaxHeight = Math.max(...currHeights)
    if (currMaxHeight !== prevMaxHeight) result.push([pos, currMaxHeight])
    prevMaxHeight = currMaxHeight
  }
  return result
}


// Test case
const buildings: [number, number, number][] = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]
console.log(getSkyline(buildings))