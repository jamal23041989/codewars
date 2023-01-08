// 1
function oddOrEven(array) {
  if (array.length === 0) return 'even'
  return array.reduce((acc, item) => acc + item, 0) % 2 === 0 ? 'even' : 'odd'
}

// 2
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even'
}

console.log(oddOrEven([0])) // 'even'
console.log(oddOrEven([1])) // 'odd'
console.log(oddOrEven([])) // 'even'
