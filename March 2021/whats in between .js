between = (a,b) => {
  let arr = [];
  for (let i=a; i<= b; i++) {
  arr.push(i);
  }
  return arr
}

console.log(between(2,6))
/*
a = 1
b = 4
--> [1, 2, 3, 4]
*/