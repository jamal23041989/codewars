function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let count = 1
    let num = h * bounce

    while (num > window) {
      count += 2
      num = num * bounce
    }

    return count
  } else {
    return -1
  }
}

console.log(bouncingBall(3, 0.66, 1.5)) // result is 3
console.log(bouncingBall(3, 1, 1.5)) // result is -1
console.log(bouncingBall(30, 0.75, 1.5)) // result is 21
console.log(bouncingBall(3.0, 0.66, 1.5)) //, 3
console.log(bouncingBall(30.0, 0.66, 1.5)) //, 15)
console.log(bouncingBall(3.0, 1.0, 1.5)) //, -1)
