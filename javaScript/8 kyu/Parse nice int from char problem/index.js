// 1
function getAge(inputString) {
  return +inputString
    .split(' ')
    .map(el => {
      let newEl = ''
      if (parseInt(el)) return (newEl = el)
      return newEl
    })
    .join('')
}

// 2
function getAge(inputString) {
  return parseInt(inputString)
}

console.log(getAge('4 years old')) // 4
