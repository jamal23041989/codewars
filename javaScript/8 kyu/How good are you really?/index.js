function betterThanAverage(classPoints, yourPoints) {
  const arr = [...classPoints, yourPoints]
  const averageNum = arr.reduce((sum, val) => sum + val, 0) / arr.length
  return yourPoints > averageNum
}

console.log(betterThanAverage([2, 3], 5)) // true
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) // true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)) // false
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)) // false
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)) // false
