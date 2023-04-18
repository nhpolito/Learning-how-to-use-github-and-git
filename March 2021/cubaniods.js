function findDifference(a, b) {
  let x = a.reduce((x,y) => x*y,10)
  let y = b.reduce((x,y) => x*y)
  //console.log(x)
  //console.log(y)
  let final = x - y
  //console.log(final)
  return Math.abs(final)
}

console.log(findDifference([11, 2, 5], [1, 10, 8]))