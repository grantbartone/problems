/**
 * November Leetcoding Challenge - Day 4
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3519/
 * 
 * Time: O(N); Space: O(N)
 */
function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n <= 1) return n === 1 ? [0] : []

  const graph: number[][] = []

  // parse edges
  for (const [x, y] of edges) {
    graph[x] = graph[x] || []
    graph[y] = graph[y] || []
    graph[x].push(y)
    graph[y].push(x)
  }

  // init leaf nodes queue for Breadth-First Search
  let leaves: number[] = []
  graph.map((a, i) => a.length === 1 && leaves.push(i))

  while (n > 2) {
    n -= leaves.length
    const nxt_leaves: number[] = []
    for (const leaf of leaves) {
      // remove leaf node and itself in related nodes
      const tmp = graph[leaf].pop()!
      graph[tmp].splice(graph[tmp].indexOf(leaf), 1)

      // save new leaf node
      graph[tmp].length === 1 && nxt_leaves.push(tmp)
    }
    leaves = nxt_leaves
  }
  return leaves
}


// TEST CASES
const tests: [number, number[][]][] = [
  [4, [[1, 0], [1, 2], [1, 3]]],
  [6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]],
  [1, []],
  [2, [[0, 1]]],
]
for (const [n, edges] of tests) console.log(findMinHeightTrees(n, edges))