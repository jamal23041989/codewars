function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

console.log(feast('great blue heron', 'garlic naan')) // true
console.log(feast('chickadee', 'chocolate cake')) // true
console.log(feast('brown bear', 'bear claw')) // false
