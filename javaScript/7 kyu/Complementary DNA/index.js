function DNAStrand(dna) {
  let pairs = { A: 'T', T: 'A', C: 'G', G: 'C' }

  return dna
    .split('')
    .map(v => pairs[v])
    .join('')
}

console.log(DNAStrand('AAAA')) // "TTTT", "String AAAA is"
console.log(DNAStrand('ATTGC')) // "TAACG", "String ATTGC is"
console.log(DNAStrand('GTAT')) // "CATA", "String GTAT is"
