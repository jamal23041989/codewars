function removeSmallest(numbers) {
  return numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)))
}

console.log(removeSmallest([1, 2, 3, 4, 5])) // [2, 3, 4, 5] ("Wrong result for [1, 2, 3, 4, 5]"
console.log(removeSmallest([388, 111, 274, 254, 6]))
console.log(removeSmallest([9, 231, 270, 61, 392]))
console.log(removeSmallest([5, 3, 2, 1, 4])) // [5, 3, 2, 4])// "Wrong result for [5, 3, 2, 1, 4]"
console.log(removeSmallest([2, 2, 1, 2, 1])) // [2, 2, 2, 1]) // "Wrong result for [2, 2, 1, 2, 1]"
console.log(removeSmallest([])) // [], "Wrong result for []"
