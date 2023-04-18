function smallestCommons(arr) {
  let y = arr.sort((a,b)=> a-b)
  console.log(y)
  let counter = 0;
  let final = []
  let testCase = [];
  for (let i = y[0]; i<= y[1]; i++) {
    testCase.push(i)
  }
  console.log(testCase)
  for (let i = y[0]; counter<100000; i = i+y[0]){
  final.push(i*y[1])
  counter++
  }
  let final2 = final.filter(function(x) {
  for (let i of testCase) {
    if (x % i !== 0) {
      return false
    }
  } return true
  })
  //console.log(final2)
  return final2[0];
}


let result = smallestCommons([23,18]);
console.log(result)
