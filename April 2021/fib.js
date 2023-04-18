function SumFibs (x) {
  let arr = [0,1]
  for (let i = 2; arr[arr.length-1]<x; i++) {
    arr.push(arr[i-1]+arr[i-2])
  }
  //console.log(arr)
  let arr2 = arr.filter(y => y%2 ==1).filter(y => y <= x)
  return arr2.reduce((a,b)=>a+b)
}

let result = SumFibs(75025)
console.log(result)