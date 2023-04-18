function isVow(a) {
  for (let i = 0; i < a.length; i++) {
  //console.log(a[i]);
  let letter = String.fromCharCode(a[i])
  let indexOfLetter = 'aeiou'.indexOf(letter);
  console.log(indexOfLetter);
    if (indexOfLetter !== -1) {
    a[i] = letter;
    }
  }
  return a
}
console.log(isVow([118,117,120,121,117,98,122,97]))