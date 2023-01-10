function cockroachSpeed(s) {
  return s >= 0 && Math.floor((s * 100000) / 3600)
}

console.log(cockroachSpeed(1.08)) // 30
console.log(cockroachSpeed(1.09)) // 30
console.log(cockroachSpeed(0)) // 0
console.log(cockroachSpeed(1.9694535108229434)) // 54
