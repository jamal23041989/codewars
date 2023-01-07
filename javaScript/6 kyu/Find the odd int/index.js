function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    const count = arr.filter(value => value === arr[i]).length
    if (count % 2 == 1) {
      return arr[i]
    }
  }
  return -1
}

findOdd([7])
findOdd([0])
findOdd([1, 1, 2])
findOdd([0, 1, 0, 1, 0])
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])
