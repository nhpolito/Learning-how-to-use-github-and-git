function addTogether() {
  console.log(arguments)
  let first = arguments[0]
 // console.log (typeof first)
  //console.log(check(first))
if (arguments.length > 1) {
  let second = arguments[1];
  if (typeof first !== "number" || typeof second !== "number") {
    return undefined
  } else {
    return first + second 
  }
}
if (arguments.length == 1) {
  if (typeof first == "number") {
    return function(x) {
      if (typeof x == "number") {
      return first + x
      } else {
        return undefined
      }
    }
  } else {
    return undefined
  }
}
  function check(x) {
    if (typeof x !== "number") {
      return undefined
    } else {
      return x  
    }
  }
}
let final = addTogether(2)("5");
console.log(final)
