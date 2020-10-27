/*
 * October Leetcoding Challenge - Day 27
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3509/
 * 
 * Time: O(N); Space: O(1)
 *
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
    val: number,
    next: ListNode | null,
}

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null
    
    let slow: ListNode | null = head, fast: ListNode | null = head
    while (fast) {
        if (!fast.next || !fast.next.next) return null
        fast = fast.next.next
        slow = slow.next!
        if (slow === fast) break
    }
    
    slow = head
    while (slow !== fast) {
        slow = slow.next!
        fast = fast.next!
    }
    return slow
}

/* TESTS
[3,2,0,-4]
1
[1,2]
0
[1]
-1
[1,2]
-1
*/