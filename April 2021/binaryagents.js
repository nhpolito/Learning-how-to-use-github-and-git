function binaryAgent(str) {
  let x = str.split(" ")
  // console.log(x)
  let y = x.map(x=>
    parseInt(x,2))
  let z = y.map(x=>String.fromCharCode(x))  
  console.log(y);
  console.log(z);
  return z.join("");
}

let result = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

console.log(result)

console.log(parseInt('01000001',2))