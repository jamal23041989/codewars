var uniqueInOrder = function (iterable) {
  return [...iterable].filter((val, i) => val !== iterable[i - 1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ["A", "B", "C", "D", "A", "B"]
