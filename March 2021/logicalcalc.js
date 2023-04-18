function logicalCalc(array, op){
  //your code here
  let sum = array.reduce(function(a,b) {
    //console.log('a' + a);
    //console.log('b' + b);
  return a + b;
  }, 0)
  console.log(sum)
  if (array = false) { 
    return false 
    }
  if (array.length == sum && op == 'AND') {
    return true; 
  }
  if (array.length > sum && op == 'OR') {
    return true;
  }
  if (sum % 2 == 1 && op == 'XOR') {
    return true;
  } else return false
}
//console.log(true+false+true)


console.log(logicalCalc([true,false], 'OR'))
//A Boolean value (True or False).


/*
let arr = [1,2,3,4];

let sum = arr.reduce((acc, val) => {
  console.log(acc, val)
  return acc + val;
}, 5);

console.log(sum)
*/