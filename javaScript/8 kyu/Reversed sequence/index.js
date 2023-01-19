// 1
const reverseSeq = n => {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i + 1)
  }
  return arr.reverse()
}

// 2
const reverseSeq2 = n => {
  return Array(n)
    .fill(0)
    .map((_, i) => n - i)
}

console.log(reverseSeq(5)) // [5, 4, 3, 2, 1]
console.log(reverseSeq2(5)) // [5, 4, 3, 2, 1]
