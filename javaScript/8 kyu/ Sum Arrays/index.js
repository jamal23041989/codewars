function sum(numbers) {
  return numbers ? numbers.reduce((sum, val) => sum + val, 0) : 0
}

console.log(sum([])) // 0
console.log(sum([1, 5.2, 4, 0, -1])) // 9.2
