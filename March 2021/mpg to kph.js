function converter (mpg) {
  let mpl = mpg / 4.546091888 
  let num = mpl * 1.609344
let final = +num.toFixed(2)
return final
}

console.log(converter(10))

//3.54))

//Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
