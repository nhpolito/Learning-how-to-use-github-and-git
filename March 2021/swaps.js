/* function fakeBin(x){
  let text = ""
  for (let i=0; i<x.length; i++) {
  let test = (x[i]);
  let int = parseInt(test);
  //console.log(int);
    if (int < 5) {
      console.log(int)
    text += "0"
    } else text += "1"
  } 
  return text
} */

function fakeBin(x) {
let arr = x.split("")
console.log(arr)
let newarr = arr.map(x => x < 5 ? 0 : 1);
console.log(newarr.join(""))
}
console.log(fakeBin('366058562030849490134388085'))
//('011011110000101010000011011'); 