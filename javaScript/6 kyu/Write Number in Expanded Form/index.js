// 1
function expandedForm(nums) {
  let num = nums.toString()
  const arr = []
  let multiply = 1

  for (let i = 1; i <= num.length; i++) {
    const digit = num[num.length - i]
    digit > 0 && arr.unshift(digit * multiply)
    multiply *= 10
  }

  return arr.join(' + ')
}

// 2
const expandedForm = n => {
  return n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(' + ')
}

console.log(expandedForm(12)) // '10 + 2'
console.log(expandedForm(42)) // '40 + 2'
console.log(expandedForm(70304)) // '70000 + 300 + 4'
