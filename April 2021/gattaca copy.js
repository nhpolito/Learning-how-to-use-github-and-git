function pairElement(str) {

function calculate(x) {
  if (x == "A") {
    return 'T'
  } else if (x=='T') {
    return 'A'
  } else if (x == "C") {
    return 'G'
  } else if (x == "G")  {
    return  'C'
  }
}
  return str.split("").map(
    x => {
      let pair = [x, calculate(x)]
      return pair
    }
  )
}


let result = pairElement("GTACG");
console.log(result)
