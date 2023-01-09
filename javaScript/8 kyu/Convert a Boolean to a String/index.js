// 1
function booleanToString(b) {
  return b ? 'true' : 'false'
}

// 2
function booleanToString(b) {
  return b.toString()
}

console.log(booleanToString(true)) // 'true', 'When we pass in true, we want the string "true" as output')
console.log(booleanToString(false)) // 'false', 'When we pass in false, we want the string "false" as output')
