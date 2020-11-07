/**
 * November Leetcoding Challenge - Day 7
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3522/
 * 
 * Time: O(N); Space: O(N)
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sumStr = `${getNumber(l1) + getNumber(l2)}`
  const dummyHead = new ListNode(0)
  for (let ptr = dummyHead; sumStr.length > 0; ptr = ptr.next) {
    const curr = sumStr[0]
    sumStr = sumStr.substr(1)
    ptr.next = new ListNode(curr)
  }
  return dummyHead.next
}

const getNumber = (list) => {
  let numStr = ''
  while (list) {
    numStr += `${list.val}`
    list = list.next
  }
  return BigInt(numStr)
}