// 1
function strCount(str, letter) {
  const arr = str.split('')
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === letter) count += 1
  }

  return str ? count : 0
}

// 2
function strCount(str, letter) {
  return str.split(letter).length - 1
}

// 3
function strCount(str, letter) {
  return str.split('').filter(c => c == letter).length
}

console.log(strCount('Hello', 'o')) // 1
console.log(strCount('Hello', 'l')) // 2
console.log(strCount('', 'z')) // 0
