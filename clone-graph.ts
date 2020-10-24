/*
 * October Leetcoding Challenge - Day 20
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3501/
 * 
 * DFS
 * Time: O(N Log N); Space: O(N)
 */

// Definition for Node.
// class Node {
//     val: number
//     neighbors: Node[]
//     constructor(val?: number, neighbors?: Node[]) {
//         this.val = (val===undefined ? 0 : val)
//         this.neighbors = (neighbors===undefined ? [] : neighbors)
//     }
// }

interface Node {
    val: number
    neighbors: Node[]
}

function cloneGraph(root: Node | null): Node | null {    
    if (!root) return null
    
    const visited: { [key: number]: Node } = {}
    const clone = (node: Node) => {
        if (node.val in visited) return visited[node.val]
        
        visited[node.val] = new Node()
        visited[node.val].val = node.val
        visited[node.val].neighbors = node.neighbors.map(clone)
    
        return visited[node.val]
    }
    return clone(root)
}