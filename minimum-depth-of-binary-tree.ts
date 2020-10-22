/**
 * October Leetcoding Challenge - Day 22
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3504/
 * 
 * Time: O(N); Space: O(1)
 * 
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
    return root ? minDepthRecurse(root!, 1) : 0
}

const minDepthRecurse = (root: TreeNode, depth: number): number => {
    if (!root.left && !root.right) return depth
    if (root.left && root.right)
        return Math.min(minDepthRecurse(root.left, depth + 1), minDepthRecurse(root.right, depth + 1))
    
    return minDepthRecurse(root.left! || root.right!, depth + 1)
}

/* TESTS
[3,9,20,null,null,15,7]
[2,null,3,null,4,null,5,null,6]
*/