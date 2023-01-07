// 1
var min = function (list) {
  return list.reduce((val, cur) => (val > cur ? (val = cur) : val))
}

// 2
var max = function (list) {
  return list.reduce((val, cur) => (val < cur ? (val = cur) : val))
}

console.log(min([-52, 56, 30, 29, -54, 0, -110])) // -110
console.log(min([42, 54, 65, 87, 0])) // 0
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])) // 566
console.log(max([5])) // 5
