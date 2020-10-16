/**
 * September Leetcoding Challenge - Day 21
 * https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3467/
 * 
 * Time: O(N log N + 2N => 3N * log N => N Log N); Space: O(N)
 */
function carPooling(trips: number[][], capacity: number): boolean {
    const events: [number, number][] = []
    while (trips.length > 0) {
        // ! operator tells the TS compiler that the destructured elements !=== (null || undefined)
        const [ num_passengers, start, end ] = trips.pop()!
        events.push([ num_passengers, start])
        events.push([ -1 * num_passengers, end])
    }
    events.sort((a: number[], b: number[]) => a[1] - b[1])
    
    for (let i = 0; i < events.length; i += 1) {
        capacity -= events[i][0]
        while (i + 1 < events.length && events[i + 1][1] === events[i][1]) {
            i += 1
            capacity -= events[i][0]
        }
        if (capacity < 0) return false
    }
    return true
}

// TEST CASES
(function() {
    const tests: [ number[][], number ][] = [
        [ [[2,1,5],[3,3,7]], 4 ],
        [ [[2,1,5],[3,3,7]], 5 ],
        [ [[2,1,5],[3,5,7]], 3 ],
        [ [[3,2,7],[3,7,9],[8,3,9]], 11 ],
    ]
    for (const [trips, capacity] of tests) console.log(carPooling(trips, capacity))
})()