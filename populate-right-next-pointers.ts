/**
 * November Leetcoding Challenge - Day 13
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3529/
 * 
 * Time: O(N); Space: O(1)
 */

// Definition for Node.
class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}

function connect(root: Node | null): Node | null {
  if (!root || !root.left || !root.right) return root

  root.left.next = root.right
  if (root.next) {
    root.right.next = root.next.left
  }
  connect(root.left)
  connect(root.right)

  return root
}