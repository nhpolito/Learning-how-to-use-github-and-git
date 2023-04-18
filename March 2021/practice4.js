function sum () {
  let total=0;
  console.log(this);
  for (let i = 0; i < arguments.length; i++) {
  total = total + arguments[i];
 // console.log(i);
  }
  return total;

}

console.log(sum.apply(3,[3,4,5]))