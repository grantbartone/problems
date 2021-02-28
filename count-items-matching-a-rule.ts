/**
 * February 27th Leetcode Contest - 5689. Count Items Matching a Rule
 * https://leetcode.com/contest/weekly-contest-230/problems/count-items-matching-a-rule/
 * 
 * Time: O(N); Space: O(1)
 */
function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  let count = 0
  items.map(([type, color, name]) => {
    switch (ruleKey) {
      case "type": return count += type === ruleValue ? 1 : 0
      case "color": return count += color === ruleValue ? 1 : 0
      case "name": return count += name === ruleValue ? 1 : 0
    }
  })
  return count
}

const cases: [string[][], string, string][] = [
  [
    [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]],
    "color",
    "silver"
  ],
  [
    [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]],
    "type",
    "phone"
  ]
]
for (const [items, ruleKey, ruleValue] of cases) console.log(countMatches(items, ruleKey, ruleValue))