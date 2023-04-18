function destroyer(...arr) {
  let newarr = [];
  // console.log(arr)
  let x = arr.splice(0,1)[0]
  // console.log(x)
  // console.log(arr)
  for (let i of x) {
  console.log(i)
  if (arr.indexOf(i) === -1) {
    newarr.push(i)
  }
  } 
  console.log(newarr)
  // let y = x.filter(x => x !== x
  return newarr;
}
