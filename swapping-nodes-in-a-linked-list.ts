/**
 * January 9th Leetcode Contest - 5652. Swapping Nodes in a Linked List
 * https://leetcode.com/contest/weekly-contest-223/problems/swapping-nodes-in-a-linked-list/
 * 
 * Time: O(N); Space: O(1) 
 */

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let first: ListNode = head, last: ListNode = head

  // Advance the "first" point to the "kth" ListNode
  for (let i = 1; i < k; i += 1) first = first.next

  // Advance the "last" point to the "kth-from-last" ListNode
  for (let walker: ListNode = first.next; walker; walker = walker.next) last = last.next

  // Swap "first" and "last" ListNode values, then return "head"
  const tmp = last.val
  last.val = first.val
  first.val = tmp

  return head
}