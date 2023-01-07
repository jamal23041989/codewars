function getCount(str) {
  const a = str.split(' ').join('')
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u') count++
  }

  return count
}

console.log(getCount('abracadabra')) // 5
