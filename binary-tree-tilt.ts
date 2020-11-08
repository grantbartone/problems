/**
 * November Leetcoding Challenge - Day 8
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3524/
 * 
 * Time: O(N); Space: O(1)
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

function findTilt(root: TreeNode | null): number {
  const tilts: number[] = []
  const getTilts = (node: TreeNode | null): number => {
    if (!node) return 0
    const leftSum = getTilts(node.left)
    const rightSum = getTilts(node.right)
    tilts.push(Math.abs(leftSum - rightSum))

    return node.val + leftSum + rightSum
  }
  getTilts(root)

  return tilts.reduce((a, b) => a + b, 0)
}