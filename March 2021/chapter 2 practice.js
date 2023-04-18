/*
console.log('hi')

let column=0
let row=0
let result=""
let size=8


while (row<size){
  column=0;
  while (column<size) {
    let rowColumn=row+column;
    let rowColumnMath = rowColumn%2
    if (rowColumnMath==0){
      result+="#";
      column+=1;}
     // console.log(rowColumnMath)} 
    else {
      result+=" ";    
      column+=1;}
    }
  result+='\n'
  row+=1;
  }
console.log(result)

function multiplier(factor) {
  return number => number * factor;

}

let twice = multiplier(2);
console.log(twice(5));

function min(x,y) {
  if(x>y) {
    return y} else
    return x
}
console.log(min(6,4))
*/
/*
function isEven(x)  {
  if(x<0) {
    x = Math.abs(x)
  }
  if(x===0) {
    return 0;
    } 
    else 
    if(x===1) {
    return 1;
    } 
    else {
      console.log(x);
      return isEven(x-2);
    }
    }

console.log(isEven(-9))

var word='hello'
console.log('helol'[3])
*/
/*You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.



Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function. */

let countb = (x,char) => {
  let y= x.split("")
  console.log(x.indexOf(char))
  let z= y.filter(x => {
    if (x == char) 
      return x
  })
  console.log(y)
  console.log(z)

return z.length
}

let result = countb("BBdslBfj",'s')

console.log(result)

// const countBs = x => {
//   let counter = 0
//   for (let i=0; i<x.length; i++)  {
//     if (x[i] === '') {
//       counter++;
//     }
//   }
//   return counter
// }
  

// let b="BananaBandsBBBBB"

// console.log(countBs(b))

// const countChars = (x, y) => {
//   let counter = 0
//   //let char = 0

//   for (let i = 0; i < x.length; i++)  {
//     if (x[i] === y) {
//       counter++;
//     }
//   }
//   return counter
// }
  

// let z="BigBoyBalllURHHHH"

// console.log(countChars(z, "H"))
