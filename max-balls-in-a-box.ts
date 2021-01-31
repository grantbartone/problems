/**
 * January 30rd Leetcode Contest - 5654. Maximum Number of Balls in a Box
 * https://leetcode.com/contest/weekly-contest-226/problems/maximum-number-of-balls-in-a-box/
 * 
 * Time: O(N); Space: O(N)
 */
function countBalls(lowLimit: number, highLimit: number): number {
  const boxes: { [index: number]: number } = {}
  let maxBalls = 0
  for (let i = lowLimit; i <= highLimit; i += 1) {
    const box = sumDigits(i)
    boxes[box] = boxes[box] || 0
    boxes[box] += 1

    maxBalls = Math.max(maxBalls, boxes[box])
  }
  return maxBalls
}

function sumDigits(num: number): number {
  let sum = 0
  while (true) {
    let lastDigit = num % 10
    sum += lastDigit
    num -= lastDigit
    if (num === 0) return sum
    num /= 10
  }
}

const cases: number[][] = [
  [1, 10],
  [5, 15],
  [19, 28],
]
for (const [lowLimit, highLimit] of cases) console.log(countBalls(lowLimit, highLimit))