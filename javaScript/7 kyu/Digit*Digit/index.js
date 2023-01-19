function squareDigits(num) {
  return +num
    .toString()
    .split('')
    .map(el => el * el)
    .join('')
}

console.log(squareDigits(3212)) // 9414
console.log(squareDigits(2112)) // 4114
console.log(squareDigits(0)) // 0
