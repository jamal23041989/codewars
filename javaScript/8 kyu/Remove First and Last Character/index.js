function removeChar(str) {
  return str.slice(1, -1)
}

console.log(removeChar('eloquent')) // "loquen"
console.log(removeChar('country')) // "ountr"
console.log(removeChar('person')) // "erso"
console.log(removeChar('place')) // "lac"
console.log(removeChar('ooopsss')) // "oopss"
