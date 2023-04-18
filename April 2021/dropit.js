function dropElements(arr, func) {
  let arr1 = [];
  for (let i = 0; i<arr.length; i++) {
    if (func(arr[i])) {
       return arr.slice(i)
    }
  } return arr1
}

let result = dropElements([1, 2, 3, 4], function(n) {return n > 2})
console.log(result)