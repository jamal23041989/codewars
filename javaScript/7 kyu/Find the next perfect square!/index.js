function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) ** 2 : -1
}

console.log(findNextSquare(121)) // 144
console.log(findNextSquare(625)) // 676
console.log(findNextSquare(114)) // -1
