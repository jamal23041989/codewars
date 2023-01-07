function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2) || (flower1 % 2 !== 0 && flower2 % 2 === 0) ? true : false
}

console.log(lovefunc(1, 4))
console.log(lovefunc(2, 2))
console.log(lovefunc(0, 1))
console.log(lovefunc(0, 0))
