/**
 * October Leetcoding Challenge - Day 31 - Number of Longest Increasing Subsequence (LC Hard)
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/563/week-5-october-29th-october-31st/3513/
 * 
 * Time: O(N); Space: O(1)
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let x, y, prev
  const find = (node) => {
    if (!node) return
    find(node.left)
    if (prev && prev.val > node.val) {
      y = node
      if (x) return
      x = prev
    }

    prev = node
    find(node.right)
  }

  // Find the incorrectly orders nodes x & y in the BST
  find(root)

  // Recover the BST
  const temp = x.val
  x.val = y.val
  y.val = temp
}