function duplicateCount(text) {
  return Object.values(
    text
      .toLowerCase()
      .split('')
      .reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1
        return acc
      }, {})
  ).filter(n => n > 1).length
}

console.log(duplicateCount('')) // 0
console.log(duplicateCount('abcde')) // 0
console.log(duplicateCount('aabbcde')) // 2
console.log(duplicateCount('aabBcde')) // 2, "should ignore case"
console.log(duplicateCount('Indivisibility')) // 1
console.log(duplicateCount('Indivisibilities')) // 2, "characters may not be adjacent"
