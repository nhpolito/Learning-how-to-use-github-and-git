

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
    console.log(current);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10

function sum () {
  let sum=0;
  for (let i = 0; i < arguments.length; i++) {
  sum = sum + arguments[i];
  console.log(i);}
}

console.log(sum.apply(null,[3,4,5]))