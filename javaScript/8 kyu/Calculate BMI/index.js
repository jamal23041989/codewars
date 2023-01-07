function bmi(weight, height) {
  let bmi = weight / height ** 2
  if (bmi <= 18.5) return 'Underweight'
  else if (bmi <= 25.0) return 'Normal'
  else if (bmi <= 30.0) return 'Overweight'
  else if (bmi > 30) return 'Obese'
}

console.log(bmi(80, 1.8)) // "Normal"
