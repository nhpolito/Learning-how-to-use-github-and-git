function translatePigLatin(str) {
  let firstvowel = str.match(/[aeiou]/);
  console.log(firstvowel);

  let place = str.indexOf(firstvowel);
  console.log(place);
  if (place == -1) {return str+'ay'}
  if (place > 0) {
    return str.slice(place) + str.slice(0,place) + "ay"
  } else return str + "way"
}

// function index (x) {
//   for (let i = 0; i<x.length ; i++) {
//     if ('aeiou'.indexOf(x[i]) !== -1) {
//       return i
//     }
//   }
// }
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
