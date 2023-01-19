// 1
function findDifference(a, b) {
  const diff = num => num.reduce((acc, cur) => acc * cur, 1)
  return diff(a) > diff(b) ? diff(a) - diff(b) : diff(b) - diff(a)
}

// 2
function find_difference(a, b) {
  return Math.abs(a.reduce((prev, curr) => prev * curr) - b.reduce((prev, curr) => prev * curr))
}

console.log(findDifference([3, 2, 5], [1, 4, 4])) // 14
console.log(findDifference([9, 7, 2], [5, 2, 2])) // 106
console.log(findDifference([11, 2, 5], [1, 10, 8])) // 30
console.log(findDifference([4, 4, 7], [3, 9, 3])) // 31
console.log(findDifference([15, 20, 25], [10, 30, 25])) // 0
