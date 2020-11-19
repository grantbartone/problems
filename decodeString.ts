/**
 * November Leetcoding Challenge - Day 19
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/566/week-3-november-15th-november-21st/3536/
 * 
 * Time: O(N); Space: O(N)
 */

function decodeString(s: string): string {
  const stack: [string, number][] = []

  let currNum: number = 0, currStr: string = ''
  for (const c of s) {
    if (c === '[') {
      stack.push([currStr, currNum])
      currStr = ''
      currNum = 0
    } else if (c === ']') {
      const [prevStr, prevNum]: [string, number] = stack.pop() || ['', 0]
      currStr = prevStr + currStr.repeat(prevNum)
    } else if (!isNaN(Number(c))) {
      currNum = currNum * 10 + Number(c)
    } else {
      currStr += c
    }
  }
  return currStr
}

// TEST CASES
const cases: string[] = [
  "3[a]2[bc]",
  "3[a2[c]]",
  "2[abc]3[cd]ef",
  "abc3[cd]xyz",
]
for (const s of cases) console.log(decodeString(s))