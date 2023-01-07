const rps = (p1, p2) => {
  if ((p1 === 'scissors' && p2 === 'paper') || (p2 === 'scissors' && p1 === 'rock') || (p1 === 'paper' && p2 === 'rock'))
    return 'Player 1 won!'
  else if (
    (p1 === 'scissors' && p2 === 'rock') ||
    (p2 === 'scissors' && p1 === 'paper') ||
    (p2 === 'paper' && p1 === 'rock')
  )
    return 'Player 2 won!'
  else if (
    (p1 === 'paper' && p2 === 'paper') ||
    (p1 === 'scissors' && p2 === 'scissors') ||
    (p1 === 'rock' && p2 === 'rock')
  )
    return 'Draw!'
}

console.log(rps('rock', 'scissors')) // getMsg(1)
console.log(rps('scissors', 'paper')) // getMsg(1)
console.log(rps('paper', 'rock')) // getMsg(1)

console.log(rps('scissors', 'rock')) // getMsg(2)
console.log(rps('paper', 'scissors')) // getMsg(2)
console.log(rps('rock', 'paper')) // getMsg(2)

console.log(rps('rock', 'rock')) // 'Draw!'
console.log(rps('scissors', 'scissors')) // 'Draw!'
console.log(rps('paper', 'paper')) // 'Draw!'
