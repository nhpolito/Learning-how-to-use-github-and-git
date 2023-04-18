function uniteUnique(...arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
   console.log(arr[i])
   for (let j=0; j < arr[i].length; j++) {
     console.log(arr[i][j])
     if (newarr.indexOf(arr[i][j]) == -1) {
      console.log(newarr.indexOf(arr[i][j]))
       newarr.push(arr[i][j])
       console.log(newarr)
     }
   }
  }
  return newarr;
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result)