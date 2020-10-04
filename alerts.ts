/**
 * Biweekly Contest 36 - 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period
 * https://leetcode.com/contest/biweekly-contest-36/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/
 * 
 * Time: O(N Log N); Space: O(N)
 */
function alertNames(keyName: string[], keyTime: string[]): string[] {
    const map: any = {}
    for (let i = 0; i < keyName.length; i += 1) {
        map[keyName[i]] = map[keyName[i]] || []
        map[keyName[i]].push(keyToNum(keyTime[i]))
    }
    
    const result: string[] = []
    for (const keyName in map) {
        if (map[keyName].length < 3) continue
        map[keyName].sort((a: number,b: number) => a - b)
        
        for (let i = 2; i < map[keyName].length; i += 1) {
            if (map[keyName][i] - map[keyName][i - 2] <= 60) {
                result.push(keyName)
                break
            }
        }
    }
    
    return result.sort()
};

const keyToNum = (keyTime: string): number => {
    const hour = Number(keyTime.slice(0,2)) * 60
    const min = Number(keyTime.slice(3))
    return hour + min
}

// TEST CASES
(function() {
    const tests: [ string[], string[] ][] = [
        [
            ["daniel","daniel","daniel","luis","luis","luis","luis"],
            ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"],
        ],
        [
            ["alice","alice","alice","bob","bob","bob","bob"],
            ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"],
        ],
        [
            ["john","john","john"],
            ["23:58","23:59","00:01"],
        ],
        [

            ["leslie","leslie","leslie","clare","clare","clare","clare"],
            ["13:00","13:20","14:00","18:00","18:51","19:30","19:49"],
        ],
    ]
    for (const [keyName, keyTime] of tests) console.log(alertNames(keyName, keyTime))
})()