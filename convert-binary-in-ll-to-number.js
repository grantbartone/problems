/**
 * November Leetcoding Challenge - Day 1 - Convert Binary Number in a Linked List to Integer
 * https://leetcode.com/explore/featured/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3516/
 * 
 * Time: O(n); Space: O(1)
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = (head) => {
  let bin = ''
  for (let node = head; node; node = node.next) bin += node.val
  return parseInt(bin, 2)
}