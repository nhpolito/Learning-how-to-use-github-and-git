function sumPrimes(num) {
  let arr = [];
  for (let i=2; i <= num; i++) {
    arr.push(i)
  }
  console.log(`arr = ${arr}`)
  let y = arr.filter(function(x) {
    let arr2 = arr.slice(0)
    console.log(arr2)
    arr2.splice(arr2.indexOf(x),1)
    console.log(arr2)
    for (let i of arr2) { 
      console.log(x)
      console.log(x % i)
      if(x % i == 0) {
      return false
      } 
  } return true
  })
  console.log(`y = ${y}`)
  return y.reduce((a,b)=>a+b)
}

let result = sumPrimes(5);
console.log(result);