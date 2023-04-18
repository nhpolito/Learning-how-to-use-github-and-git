function bmi(weight, height) {
    let bmi = weight/height
    console.log(bmi)
    return bmi <= 18.5 ? "Underweight" : bmi <= 25.0 ? "Normal" : bmi <= 30.0 ? "Overweight" : "Obese"
  }

let result = bmi(100,6)

console.log(result)