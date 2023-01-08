const arr = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']

// 1
function findNeedle(haystack) {
  const index = haystack.findIndex(item => String(item).toLowerCase() === 'needle')
  return `found the needle at position ${index}`
}

// 2
function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle')
}

console.log(findNeedle(arr))
