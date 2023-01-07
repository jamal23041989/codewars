let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

function countPositivesSumNegatives(input) {
  const arr = []
  if (input == null || input.length < 1) return []
  const positive = input.filter(x => x > 0)
  const negative = input.filter(x => x <= 0).reduce((sum, el) => sum + el, 0)
  arr.push(positive.length, negative)
  return arr
}

console.log(countPositivesSumNegatives(testData))
console.log(countPositivesSumNegatives([0, 0]))
