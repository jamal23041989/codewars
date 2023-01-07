function isIsograma(str) {
  const arr = str.toLowerCase().split('')
  return arr.length === new Set(arr).size
}

console.log(isIsograma('Dermatoglyphics'))
console.log(isIsograma('aba'))
console.log(isIsograma('moOse'))
