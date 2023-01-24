// 1
function getSum(a, b) {
  if (a === b) return a
  let sum = 0

  for (let i = a < b ? a : b; i < (a < b ? b : a); i++) {
    sum += i
  }

  return sum
}

// 2
const GetSum = (a, b) => {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return ((max - min + 1) * (min + max)) / 2
}

// 3
function GetSum(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2
}

console.log(getSum(0, -1)) // -1
console.log(getSum(0, 1)) // 1
console.log(getSum(2, 2)) // 2
