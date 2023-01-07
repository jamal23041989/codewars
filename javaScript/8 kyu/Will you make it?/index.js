const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft ? true : false
}

console.log(zeroFuel(50, 25, 2)) // true
console.log(zeroFuel(100, 50, 1)) // false
