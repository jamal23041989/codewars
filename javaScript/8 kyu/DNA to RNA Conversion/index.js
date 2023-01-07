function DNAtoRNA(dna) {
  return dna
    .split('')
    .map(el => (el === 'T' ? (el = 'U') : el))
    .join('')
}

console.log(DNAtoRNA('TTTT')) // "UUUU"
console.log(DNAtoRNA('GCAT')) // "GCAU"
console.log(DNAtoRNA('GACCGCCGCC')) // "GACCGCCGCC"
