// 1
function solution(str, ending) {
  return str.slice(-ending.length).includes(ending)
}

// 2
function solution(str, ending) {
  return str.endsWith(ending)
}

console.log(solution('abc', 'bc')) // returns true
console.log(solution('abc', 'd')) // returns false
