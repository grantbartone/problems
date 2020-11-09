/**
 * November Leetcoding Challenge - Day 9
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3525/
 * 
 * Time: O(N Log N); Space: O(1)
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

function maxAncestorDiff(root: TreeNode | null): number {
  if (!root) return 0

  let max = 0
  const getMaxDiff = (node: TreeNode | null, rootVal: number): void => {
    if (!node) return
    getMaxDiff(node.left, rootVal)
    getMaxDiff(node.right, rootVal)

    max = Math.max(max, Math.abs(node.val - rootVal))
  }

  const dfs = (node: TreeNode | null): void => {
    if (!node) return

    getMaxDiff(node, node.val)
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)

  return max
}