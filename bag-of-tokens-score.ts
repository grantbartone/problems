/**
 * October Leetcoding Challenge - Day 24
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3506/
 * 
 * Time: O(N Log N); Space: O(1)
 */
function bagOfTokensScore(tokens: number[], P: number): number {
    tokens.sort((a,b) => a - b)
    
    let best = 0, score = 0
    while (tokens.length > 0) {
        if (P >= tokens[0]) {
            P -= tokens[0]
            score += 1
            best = Math.max(best, score)
            tokens.shift()
            continue
        }
        
        if (score > 0) {
            P += tokens[tokens.length - 1]
            score -= 1
            tokens.pop()
            continue
        }
        break
    }
    return best
}

// TEST CASES
(function() {
  const tests: [ number[], number ][] = [
    [ [100], 50 ],
    [ [100,200], 150 ],
    [ [100,200,300,400], 200 ],
  ]
  for (const [tokens, P] of tests) console.log(bagOfTokensScore(tokens, P))
})()