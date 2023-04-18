let quit = "qu";
let noquit = "quqt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));
