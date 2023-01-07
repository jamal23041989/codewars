// Example 1:
const arr1 = ['arp', 'strong', 'live']
const arr2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']
// returns ["arp", "live", "strong"]

// Example 2:
const arr3 = ['tarp', 'mice', 'bull']
const arr4 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']
// returns []

function inArray(array1, array2) {
  return array1.filter(x => array2.some(y => y.includes(x))).sort()
}

console.log(inArray(arr1, arr2))
console.log(inArray(arr3, arr4))
