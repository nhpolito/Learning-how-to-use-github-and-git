function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
  console.log(alphabet)
  let x = str.split("")
  console.log(x)
  let start = alphabet.indexOf(x[0])
  let end = alphabet.indexOf(x[x.length-1])
  //console.log(start)
  console.log(end)
  for (let i = start; i < end; i++) {
    //console.log(alphabet[i])
    if (x.indexOf(alphabet[i]) === -1) {
    return alphabet[i]
    } 
  } return undefined
}

let result = fearNotLetter("abcdefghjklmno");

console.log(result)