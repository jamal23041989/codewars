// 1
function century(year) {
  if (year > 0 && year < 100) return 1

  if (year.toString().length <= 4) {
    return year.toString().slice(-2) === '00'
      ? parseInt(year.toString().slice(0, 2))
      : parseInt(year.toString().slice(0, 2)) + 1
  }

  return year.toString().slice(-2) === '00'
    ? parseInt(year.toString().slice(0, -2))
    : parseInt(year.toString().slice(0, -2)) + 1
}

// 2
function century(year) {
  return Math.ceil(year / 100) //using ceiling method to round up to nearest century (100)
}

console.log(century(1705)) // 18, 'Testing for year 1705'
console.log(century(1900)) // 19, 'Testing for year 1900'
console.log(century(1601)) // 17, 'Testing for year 1601'
console.log(century(2000)) // 20, 'Testing for year 2000'
console.log(century(89)) // 1, 'Testing for year 89'
console.log(century(563328)) // 1, 'Testing for year 89'
