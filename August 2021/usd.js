function usdcny(usd) {
  let x = usd * 7.75
  let y = Math.round((x) * 100) / 100
  let z = y.toString().length
  console.log(z)
  return y
  
}

let result = usdcny(50)

console.log(result)

// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to the nearest hundredth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)