// Only change code below this line

// Only change code above this line
class Thermostat {
  constructor (temp) {
    this.temp = temp
  }
  //getter
  get temperature() { 
    return 5/9*(this.temp - 32)
  }
  set temperature(c) {
    this.temp = c * 9 / 5 + 32
  }
}


const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp)
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(thermos)
console.log(temp)