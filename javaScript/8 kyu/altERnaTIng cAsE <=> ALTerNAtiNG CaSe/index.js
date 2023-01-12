String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map(item => (item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()))
    .join('')
}
