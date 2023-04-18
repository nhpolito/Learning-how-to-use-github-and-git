let xsum = function (a) {
  return function (b) {
    if (b) { 
    return xsum(a+b)
    } else return a
  }
}

console.log(xsum(1)(2)(3)())