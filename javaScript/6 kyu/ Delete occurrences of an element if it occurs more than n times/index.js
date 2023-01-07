function deleteNth(arr, n) {
  const list = {}
  return arr.filter(x => {
    list[x] = (list[x] || 0) + 1
    return list[x] <= n
  })
}

console.log(deleteNth([20, 37, 20, 21], 1)) //, [20, 37, 21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)) // [1, 1, 3, 3, 7, 2, 2, 2]
