let x = [1,3,4]

function hello (arr, callback) {
  let result = []
  for (let i of arr) {
    result.push(callback(i))
  }
  return result
}

console.log(hello(x, y))

function y (item) {
  return item * 2
}

