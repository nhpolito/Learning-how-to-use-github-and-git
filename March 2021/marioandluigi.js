// function pipeFix(numbers) {
//   let max = Math.max.apply(this, numbers);
//   let min = Math.min.apply(this, numbers);
//   let arr = [];
  
//   for (let i=min; i<=max; i++) {
//     arr.push(i);
//     console.log(i);
//   }
//   return arr
  
  
//   }
  
//   console.log(pipeFix([3,5,7]))

function pipe(x) {
  let newpipe=[]
  let sorted = x.sort()
  console.log(sorted)
  let start = sorted[0]
  let end = sorted[sorted.length-1]
  console.log(start, end)
  for (let i=start; i<=end; i++) {
    newpipe.push(i)
  }
 return newpipe
}
 let result = pipe([3,7,5])
 console.log(result)