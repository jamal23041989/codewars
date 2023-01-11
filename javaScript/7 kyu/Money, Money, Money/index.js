// 1
function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) return 0
  let year = 0
  let p = principal

  while (p < desired) {
    let gains = p * interest - p * interest * tax
    p += gains
    year += 1
  }

  return year
}

// 2
function calculateYears(principal, interest, tax, desired) {
  return Math.ceil(Math.log(desired / principal) / Math.log(1 + interest * (1 - tax)))
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)) // 3
console.log(calculateYears(1000, 0.01625, 0.18, 1200)) // 14
console.log(calculateYears(1000, 0.05, 0.18, 1000)) // 0
