function basicOp(operation, value1, value2) {
  if (operation === '+') return value1 + value2
  if (operation === '-') return value1 - value2
  if (operation === '*') return value1 * value2
  if (operation === '/') return value1 / value2
}

console.log(basicOp('+', 4, 7)) // 11
console.log(basicOp('-', 15, 18)) // -3
console.log(basicOp('*', 5, 5)) // 25
console.log(basicOp('/', 49, 7)) // 7
