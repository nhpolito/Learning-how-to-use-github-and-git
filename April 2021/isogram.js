function isIsogram(str){
  let x = str.toLowerCase().split("").sort()
  console.log(x)
  for (let i = 0; i < str.length; i++) {
  if (x[i] == x[i-1]) {
    return false
  }
  } return true
}

console.log(isIsogram("aba"))