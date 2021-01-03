function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]).reverse()

  let maxUnits = 0, boxesSoFar = 0
  for (let i = 0; i < boxTypes.length && boxesSoFar < truckSize; i += 1) {
    const [numberOfBoxes, numberOfUnitsPerBox] = boxTypes[i]
    const boxes = boxesSoFar + numberOfBoxes > truckSize ? truckSize - boxesSoFar : numberOfBoxes
    maxUnits += boxes * numberOfUnitsPerBox
    boxesSoFar += boxes
  }
  return maxUnits
}

const tests: [[number, number][], number][] = [
  [[[1, 3], [2, 2], [3, 1]], 4],
  [[[5, 10], [2, 5], [4, 7], [3, 9]], 10]
]
for (const [boxTypes, truckSize] of tests) console.log(maximumUnits(boxTypes, truckSize))