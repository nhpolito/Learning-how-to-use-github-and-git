digitize = n => {
let x = n.toString().split("").map(x=>parseInt(x))
console.log(x)
return x
}

console.log(digitize(35733))