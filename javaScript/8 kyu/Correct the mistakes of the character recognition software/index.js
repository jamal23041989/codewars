// 1
function correct(string) {
  return string.replaceAll('0', 'O').replaceAll('1', 'I').replaceAll('5', 'S')
}

// 2
correct = s => s.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')

console.log(correct('L0ND0N')) // 'LONDON')
console.log(correct('DUBL1N')) // 'DUBLIN')
console.log(correct('51NGAP0RE')) // 'SINGAPORE')
console.log(correct('BUDAPE5T')) // 'BUDAPEST')
console.log(correct('PAR15')) // 'PARIS')
