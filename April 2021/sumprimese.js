function smallestCommons(arr) {
  let y = arr.sort((a,b) => a-b)
  console.log(y)
  let first = y[0]
  let second = y[1]
  let final = []
  let test = []
  let firstM = []
  let secondM = []
  let counter = 0
  let counter2 = 0
  for (let i = y[0]; i <= y[1]; i++) {
    test.push(i)
  }
  for (let i = first; counter<100000; i = i+first) {  
    firstM.push(i)
    counter++
  }
  for (let i = second; counter2<100000; i = i+second) {  
    secondM.push(i)
    counter2++
    }
  for (let i of firstM) {
    if (secondM.indexOf(i) !==  -1) {
      final.push(i)
    }
  }
  let final2 = final.filter(function(x){
    for (let i of test) {
      if ( x % i !== 0) {
        return false
      }
    } return true
  })
  //console.log(firstM) 
  //console.log(secondM)
  //console.log(final)
  //console.log(test)
  //console.log(final2)
  return final2[0];
}


smallestCommons([1,13]);