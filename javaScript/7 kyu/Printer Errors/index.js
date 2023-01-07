function printerError(s) {
  let arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
  let arr = s.split('')
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) count++
  }

  return `${count}/${s.length}`
}

let s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'
console.log(printerError(s)) // "3/56"
s = 'aaabbbbhaijjjm'
console.log(printerError(s)) //"0/14"

s = 'aaaxbbbbyyhwawiwjjjwwm'
console.log(printerError(s)) //"8/22"
