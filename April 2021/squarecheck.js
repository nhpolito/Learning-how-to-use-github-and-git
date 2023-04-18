function comp(array1, array2){
  let sq1 = array1.map(function(x) {
    return x*x
  }).sort((a,b) => a-b)
  let sq2 = array2.sort((a,b) => a-b)
  let newarr = sq2.filter(function(x){
    return (sq2.indexOf(x) !== sq1.indexOf(x))
  })
  if (newarr.length > 0) {
    return false
  } return true
}
// function comp(array1, array2) {
//   let sq = array1
//   let sq1 = s.map(function(x) 
//   {
//     return x*x;
//   })
//   let sq2 = array2;
//   console.log(sq1)
//   let newarr = sq2.filter(function(x) {
//     if(sq1.indexOf(x) === -1) {
//     return true
//     } 
//   })
//   if (newarr > 0) {
//     return false
//   } else return true
// }


a1 = [7, 10, 7, 10, 2, 3, 9, 9, 1, 8, 8, 4, 9, 8, 9, 9, 8, 6, 5, 7, 6];
a2 = [64, 10, 49, 64, 100, 4, 64, 81, 36, 100, 16, 49, 81, 81, 49, 81, 36, 25, 81, 64, 1];
console.log(comp(a1, a2))

