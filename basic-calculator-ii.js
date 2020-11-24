/**
 * November Leetcoding Challenge - Day 24
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/567/week-4-november-22nd-november-28th/3542/
 * 
 * Time: O(N); Space: O(1)
 *
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  if (s.length === 0) return 0

  s = s.trim()
  const stack = []
  let num = 0, operator = '+'
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === ' ') continue
    if (!isNaN(s[i])) num = num * 10 + Number(s[i])
    if (isNaN(s[i]) || i === s.length - 1) {
      switch (operator) {
        case '+':
          stack.push(num)
          break
        case '-':
          stack.push(-num)
          break
        case '*':
          stack.push(stack.pop() * num)
          break
        case '/':
          stack.push(parseInt(stack.pop() / num, 10))
          break
      }
      operator = s[i]
      num = 0
    }
  }
  return stack.reduce((a, b) => a + b)
}


// TEST CASES
const operations = [
  "3+2 * 2",
  " 3/2 ",
  " 3+5 / 2 ",
  "42",
]
for (const s of operations) console.log(calculate(s))