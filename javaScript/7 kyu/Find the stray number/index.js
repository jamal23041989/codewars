// 1
function stray(numbers) {
  return numbers.find(number => numbers.indexOf(number) === numbers.lastIndexOf(number))
}

// 2
const stray = nums => nums.reduce((a, b) => a ^ b)

console.log(stray([1, 1, 2])) // 2
console.log(stray([1, 2, 1])) // 2
console.log(stray([2, 1, 1])) // 2
