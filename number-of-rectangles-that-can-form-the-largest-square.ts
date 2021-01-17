/**
 * January 16th Leetcode Contest - 5653. Number Of Rectangles That Can Form The Largest Square
 * https://leetcode.com/contest/weekly-contest-224/problems/number-of-rectangles-that-can-form-the-largest-square/
 * 
 * Time: O(N); Space: O(N)
 */
function countGoodRectangles(rectangles: number[][]): number {
  const maxLengths: number[] = rectangles.map(([a, b]) => a < b ? a : b)
  const maxLen = Math.max(...maxLengths)
  return maxLengths.filter(a => a === maxLen).length
}

/* TESTS
[[5,8],[3,9],[5,12],[16,5]]
[[2,3],[3,7],[4,3],[3,7]]
[[5,8],[3,9],[3,12]]
*/