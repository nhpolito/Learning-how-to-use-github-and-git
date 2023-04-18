let y = [3,5,6,10,[34]]


function arraySum(arr) {
    return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
  }


console.log(arraySum(y))

