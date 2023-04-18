function duplicateCount(text){
  let newarr = []
  let finalArr = []
  let counter = 1;
  let x = text.toLowerCase().split("")
  let y = x.sort()
  for (let i=0; i<x.length; i++)
  if (y[i] == y[i+1]) {
    newarr.push(y[i])
  }
  console.log(y)
  console.log(newarr)
  for (let i of newarr) {
    if (finalArr.indexOf(i) == -1) {
      finalArr.push(i)
    }
  }
  return finalArr.length
}

final = duplicateCount("Indivisibilities")
console.log(final)