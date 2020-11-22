/**
 * November Leetcoding Challenge - Day 22
 * https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/567/week-4-november-22nd-november-28th/3540/
 * 
 * Time: O(N); Space: O(N)
 */
function uniqueMorseRepresentations(words: string[]): number {
  const transformations: string[] = []
  for (const word of words) {
    let curr = ""
    for (const letter of word) curr += getTransformation(letter)
    if (!transformations.includes(curr)) transformations.push(curr)
  }
  return transformations.length
}

function getTransformation(letter: string): string {
  const transformations = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  return transformations[letter.charCodeAt(0) - 'a'.charCodeAt(0)]
}


// TEST CASE
const words: string[] = ["gin", "zen", "gig", "msg"]
console.log(uniqueMorseRepresentations(words))