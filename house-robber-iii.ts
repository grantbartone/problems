/**
 * November Leetcoding Challenge - Day 23
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/567/week-4-november-22nd-november-28th/3541/
 * 
 * Time: O(N); Space: O(N)
 */

// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function rob(root: TreeNode | null): number {
  return Math.max(...robSub(root))
}

// Return a tuple with subtree totals of when the root is not robbed (idx= 0) vs is robbed (idx= 1)
function robSub(root: TreeNode | null): [number, number] {
  if (!root) return [0, 0]

  const left: number[] = robSub(root.left)
  const right: number[] = robSub(root.right)

  return [
    Math.max(left[0], left[1]) + Math.max(right[0], right[1]),
    root.val + left[0] + right[0],
  ]
}


/* TEST CASES
[3,2,3,null,3,null,1]
[3,4,5,1,3,null,1]
[4,1,null,2,null,3]
[2,1,3,null,4]
*/