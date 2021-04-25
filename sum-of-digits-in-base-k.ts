/**
 * April 24th Leetcode Contest - 5738. Sum of Digits in Base K
 * https://leetcode.com/contest/weekly-contest-238/problems/sum-of-digits-in-base-k/
 * 
 * Time: O(N); Space: O(1)
 */
function sumBase(n: number, k: number): number {
  return n.toString(k).split('').reduce((a, b) => a + Number(b), 0)
}

const cases: [number, number][] = [
  [34, 6],
  [10, 10],
]
for (const [n, k] of cases) console.log(sumBase(n, k))