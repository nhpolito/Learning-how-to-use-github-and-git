function hi (x) {
  let sum = x 
  return function (x) {
    return sum + x 
  }
}
console.log(hi(3)(5))