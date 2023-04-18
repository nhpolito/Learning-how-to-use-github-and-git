let sup = x => {
  let arr = []
  for (let i=x; i>0; i--) {
  arr.push(i);
  console.log(arr);
  }
  return arr
}


console.log(sup(2))

//Example : n=5 --> [5,4,3,2,1]
