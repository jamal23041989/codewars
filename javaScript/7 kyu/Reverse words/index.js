function reverseWords(str) {
  return str
    .split(' ')
    .map(el => el.split('').reverse().join(''))
    .join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) // "ehT kciuq nworb xof spmuj revo eht yzal .god"
console.log(reverseWords('apple')) // "elppa"
console.log(reverseWords('a b c d')) // "a b c d"
console.log(reverseWords('double  spaced  words')) // "elbuod  decaps  sdrow"
