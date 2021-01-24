/**
 * January 23rd Leetcode Contest - 5661. Latest Time by Replacing Hidden Digits
 * https://leetcode.com/contest/weekly-contest-225/problems/latest-time-by-replacing-hidden-digits/
 * 
 * Time: O(N); Space: O(N)
 */
const maximumTime = (time: string): string => {
  let result = ''
  for (let i = 0; i < 5; i += 1) {
    result += time[i] === '?' ? maxDigit(i, time) : time[i]
  }
  return result
}

const maxDigit = (idx: number, time: string): string => {
  switch (idx) {
    case 0: return time[1] === '?' || Number(time[1]) < 4 ? '2' : '1'
    case 1: return ['2', '?'].indexOf(time[0]) !== -1 ? '3' : '9'
    case 3: return '5'
    case 4: return '9'
  }
}

const cases: string[] = [
  "2?:?0",
  "0?:3?",
  "1?:22",
  "??:3?",
  "?4:03",
]
for (const time of cases) console.log(maximumTime(time))