function getMiddle(s) {
  return s.length % 2 === 1
    ? s.slice(Math.round(s.length / 2) - 1, Math.round(s.length / 2))
    : s.slice(Math.round(s.length / 2) - 1, Math.round(s.length / 2) + 1)
}

console.log(getMiddle('test')) // "es"
console.log(getMiddle('testing')) // "t"
console.log(getMiddle('middle')) // "dd"
console.log(getMiddle('A')) // "A"
