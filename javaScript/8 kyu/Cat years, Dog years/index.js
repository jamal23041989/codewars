// 1
var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0
  let dogYears = 0

  for (let i = 0; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15
      dogYears += 15
    }

    if (i === 2) {
      catYears += 9
      dogYears += 9
    }

    if (i > 2) {
      catYears += 4
      dogYears += 5
    }
  }

  return [humanYears, catYears, dogYears]
}

// 2
var humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24]
}

console.log(humanYearsCatYearsDogYears(1)) // [1, 15, 15]
console.log(humanYearsCatYearsDogYears(2)) // [2, 24, 24]
console.log(humanYearsCatYearsDogYears(10)) // [10, 56, 64]

// HumanYears >= 1
// HumanYears - только целые числа
// Кошачьи годы
// 15 кошачьих лет за первый год
// +9 кошачьих лет за второй год
// +4 кошачьих года за каждый последующий год
// Собачьи годы
// 15 собачьих лет за первый год
// +9 собачьих лет за второй год
// +5 собачьих лет за каждый последующий год
// использованная литература
