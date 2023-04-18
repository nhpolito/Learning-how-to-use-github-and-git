function rot13(str) {
let alphaone = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
console.log(alphaone)

let converted = str.split("")
  console.log(converted)

let plus13 = converted.map(function (x) {
  let number = alphaone.indexOf(x);
  let number2 = alphaone.indexOf(x) + 13
  console.log(number2)
  if (number == -1) {
    return x 
  } else return alphaone[number2]
})

console.log(plus13)
  return plus13.join("");
}

let result = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
console.log(result)

