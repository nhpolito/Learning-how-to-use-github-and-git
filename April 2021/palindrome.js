function palindrome(str) {
  const y = str.toLowerCase().replace(/[\W_]+/g,"")
  let x = y
  let z = x.split("").reverse().join("")
  console.log(y)
  console.log(z)
  if ( x == z) {
    return true
  }
  return false;
}



let result = palindrome("race car");

console.log(result)