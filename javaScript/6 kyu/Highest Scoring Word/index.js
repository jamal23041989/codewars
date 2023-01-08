// 1
function high(x) {
  let max = 0
  const arrNumber = x.split(' ').map(el => {
    return el
      .split('')
      .map(el => el.charCodeAt(0) - 96)
      .reduce((acc, el) => acc + el, 0)
  })

  for (i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > max) max = arrNumber[i]
  }

  return x.split(' ')[arrNumber.findIndex(el => el === max)]
}

// 2
function high(s) {
  let arr = s.split(' ').map(s => [...s].reduce((acc, el) => acc + el.charCodeAt(0) - 96, 0))
  return s.split(' ')[arr.indexOf(Math.max(...arr))]
}

console.log(high('man i need a taxi up to ubud')) // 'taxi'
console.log(high('what time are we climbing up the volcano')) // 'volcano'
console.log(high('take me to semynak')) // 'semynak'
console.log(high('aa b')) // 'aa'
console.log(high('b aa')) // 'b'
console.log(high('bb d')) // 'bb'
console.log(high('d bb')) // 'd'
console.log(high('aaa b')) // 'aaa'
