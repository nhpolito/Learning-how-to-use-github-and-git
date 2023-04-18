function steamrollArray(arr, result = []) {
  arr.forEach((x) => {
    if (Array.isArray(x)) {console.log(result)
    steamrollArray(x,result)
    console.log(x)
    } else {
      result.push(x)
    }
  })
  return result
}




let result = steamrollArray([1, [2], [3, [[4]]]])
console.log(result)