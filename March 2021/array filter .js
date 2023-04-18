let arr = [22,4,4,5,123]

let arr2 = arr.filter(x => x.toString().length == 2)

console.log(arr2)

let y = 2;

for (let i=0; i < arr.length; i++) {
  //console.log(arr[i])
  let z = arr[i].toString().length
  console.log(z)
}