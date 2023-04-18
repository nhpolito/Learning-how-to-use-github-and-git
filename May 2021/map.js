function callback(x, callback) {
 return callback(x)
}

function mult(x) {
    return x*2
}

console.log(callback(2, mult))