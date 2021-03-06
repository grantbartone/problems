/**
 * November Leetcoding Challenge - Day 15
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/566/week-3-november-15th-november-21st/3532/
 * 
 * Time: O(Log N); Space: O(1)
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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) return 0

  let sum = 0
  if (root.left && root.val >= low) sum += rangeSumBST(root.left, low, high)
  if (root.val >= low && root.val <= high) sum += root.val
  if (root.right && root.val <= high) sum += rangeSumBST(root.right, low, high)

  return sum
}