function duplicateEncode(word) {
  let letters = word.toLowerCase().split('')
  const obj = letters.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
  }, {})
  return letters.map(letter => (obj[letter] === 1 ? '(' : ')')).join('')
}

console.log(duplicateEncode('din')) // "((("
console.log(duplicateEncode('recede')) // "()()()"
console.log(duplicateEncode('Success')) // ")())())", "should ignore case"
console.log(duplicateEncode('(( @')) // "))(("
