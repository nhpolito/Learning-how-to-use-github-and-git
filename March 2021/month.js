/* const quarterOf = (month) => {
  // Your code here
  let x = (month/4 > 2.25) ?  4 : 
  ( month/4 > 1.5) ?  3 :
  ( month/4 > .75) ?  2 :  1;
  return x
}
*/

const quarterOf = m => Math.ceil(m/3);

console.log(quarterOf(10))
