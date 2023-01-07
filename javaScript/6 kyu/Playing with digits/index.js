function digPow(n, p) {
  const res = String(n)
    .split('')
    .reduce((val, num) => val + Math.pow(num, p++), 0)
  let k = res / n
  return k % 1 === 0 ? k : -1
}

console.log(digPow(89, 1)) // 1
console.log(digPow(92, 1)) // -1
console.log(digPow(46288, 3)) // 51
