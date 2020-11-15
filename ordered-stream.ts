/**
 * November Leetcoding Contest - Weekly Contest 215 - 5601. Design an Ordered Stream
 * https://leetcode.com/contest/weekly-contest-215/problems/design-an-ordered-stream/
 * 
 * Time: O(N); Space: O(N)
 */
class OrderedStream {
  ptr: number
  stream: string[]

  constructor(n: number) {
    this.ptr = 0
    this.stream = Array(n)
  }

  insert(id: number, value: string): string[] {
    this.stream[id - 1] = value

    const result: string[] = []
    while (this.stream[this.ptr]) {
      result.push(this.stream[this.ptr])
      this.ptr += 1
    }

    return result
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */