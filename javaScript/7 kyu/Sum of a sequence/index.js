// 1
const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0
  let sum = 0

  for (let i = begin; i <= end; i += step) {
    sum += i
  }

  return sum
}

// 2
const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0
  return begin + sequenceSum(begin + step, end, step)
}

console.log(sequenceSum(2, 6, 2)) // 12
console.log(sequenceSum(1, 5, 1)) // 15
console.log(sequenceSum(1, 5, 3)) // 5
