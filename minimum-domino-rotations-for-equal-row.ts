/*
 * October Leetcoding Challenge - Day 19
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3500/
 * Time: O(N); Space: O(N)
 */
function minDominoRotations(A: number[], B: number[]): number {
    const countsA: { [key: number]: number } = {}, countsB: { [key: number]: number } = {}
    let maxA: [ number, number ] = [ -1, -1 ], maxB: [ number, number ] = [ -1, -1 ]
    for (let i = 0; i < A.length; i += 1) {
        countsA[A[i]] = countsA[A[i]] ? countsA[A[i]] + 1 : 1
        countsB[B[i]] = countsB[B[i]] ? countsB[B[i]] + 1 : 1
        
        if (countsA[A[i]] > maxA[1]) maxA = [ A[i], countsA[A[i]] ]
        if (countsB[B[i]] > maxB[1]) maxB = [ B[i], countsB[B[i]] ]
    }
    
    const maxSet = maxA[1] > maxB[1] ? A : B, minSet = maxSet === A ? B : A
    const max = maxA[1] > maxB[1] ? maxA : maxB, minRotations = A.length - max[1]
    for (let i = 0, count = 0; i < maxSet.length; i += 1) {
        if (maxSet[i] !== max[0] && minSet[i] === max[0]) count += 1
        if (count === minRotations) return minRotations
    }
    return -1
}

// TEST CASES
(function() {
  const tests: [ number[], number[] ][] = [
    [ [2,1,2,4,2,2], [5,2,6,2,3,2] ],
    [ [3,5,1,2,3], [3,6,3,3,4] ],
  ]
  for (const [A, B] of tests) console.log(minDominoRotations(A, B))
})()