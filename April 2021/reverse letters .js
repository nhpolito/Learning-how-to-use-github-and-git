function alphabeticalOrder(arr) {
  // Only change code below this line
  let x = arr.sort((a,b) => 
  { 
    return (a === b ? 0 : a<b ? 1 : -1)
  })

  console.log(x)
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

alphabeticalOrder([1,4,5,8])