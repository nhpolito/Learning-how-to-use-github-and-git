function digital_root(n) {
  if (n < 10) return n
  let total = 0
  for (const digit of n.toString()) {
      total += parseInt(digit)
  }
  console.log(n.toString())
  console.log(typeof(n.toString()))
  return digital_root(total)
}

console.log(digital_root(34))
 
z = [0,3,4]

/*console.log(z.length)
console.log(z[0])*/