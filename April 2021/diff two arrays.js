function diffArray(arr1, arr2) {
  let longer = arr1.length > arr2.length ? arr1 : arr2;
  console.log(longer)
  let shorter = arr1.length < arr2.length ? arr1 : arr2;
  console.log(shorter)
  if (shorter == longer) {
    let x = arr1.filter(x => arr2.indexOf(x) == -1)
    let y = arr2.filter(x => arr1.indexOf(x) == -1)
    console.log (x)
    console.log (y)
    let newarrsamelength = x.concat(y)
    console.log(newarrsamelength)
    return newarrsamelength;
  }
  let x = longer.filter(x => shorter.indexOf(x) == -1)
  let y = shorter.filter(x => longer.indexOf(x) == -1)
  console.log(x)
  console.log(y)
  let newarr = x.concat(y)
  console.log(newarr)
  return newarr;
}
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);