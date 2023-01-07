function find_average(array) {
  return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0) / array.length
}

console.log(find_average([1, 1, 1])) // 1
console.log(find_average([1, 2, 3])) // 2
console.log(find_average([1, 2, 3, 4])) // 2.5
