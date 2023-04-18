function check(a, x) {
  console.log(x)
  let checked = false
  for (let i = 0; i<a.length; i++) {
    if (a[i] == x) {
      checked = true
    } 
  }
  return checked
}

console.log(check(['what', 'a', 'great', 'kata'], 'a'))


const test = (x,y) => x.includes(y)

console.log(test([1,2],2))