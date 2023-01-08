// 1
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(item => item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase())
    .join(' ')
}

// 2
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real")) // "How Can Mirrors Be Real If Our Eyes Aren't Real"
